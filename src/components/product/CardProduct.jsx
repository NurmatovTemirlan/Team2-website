import React from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const CardProduct = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div>
      <img width={150} src={elem.image} alt="" className="card-image" />
      <h1 className="card-price">${elem.price}</h1>
      <h2 className="card-title">{elem.title}</h2>
      <h3 className="card-description">{elem.description}</h3>
      <span className="card-category">{elem.category.title}</span>
      <button onClick={() => navigate(`/edit/${elem.id}`)}>edit</button>
      <button onClick={() => deleteProduct(elem.id)}>delete</button>
    </div>
  );
};

export default CardProduct;
