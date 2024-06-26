import React, { useEffect } from "react";
import Form from "./Form";
import { useProducts } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <div>
      <Form isEdit={true} />
    </div>
  );
};

export default EditProduct;
