import { createContext, useContext, useReducer } from "react";
import { API_PRODUCTS } from "../../helpers/const";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContext = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: null,
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
  // ! create
  const createProduct = async (newProduct) => {
    await axios.post(API_PRODUCTS, newProduct);
  };
  // ! get
  const getProducts = async () => {
    const { data } = await axios(`${API_PRODUCTS}/${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  // ! edit
  const editProduct = async (editedProduct) => {
    await axios.patch(`${API_PRODUCTS}/${editedProduct.id}`, editedProduct);
    getProducts();
  };
  // ! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    getProducts();
  };
  // ! filter
  function fetchByParams(query, value) {
    const paramsFromUrl = new URLSearchParams(location.search);
    if (value === "All") {
      paramsFromUrl.delete(query);
    } else {
      paramsFromUrl.set(query, value);
    }
    const url = `${location.pathname}?${paramsFromUrl.toString()}`;
    navigate(url);
  }
  const values = {
    editProduct,
    createProduct,
    getProducts,
    getOneProduct,
    deleteProduct,
    fetchByParams,
    products: state.products,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
