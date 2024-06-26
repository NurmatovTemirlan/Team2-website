import React from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const CardProduct = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const MAX_TITLE_LENGTH = 50;
  const truncatedTitle =
    elem.description.length > MAX_TITLE_LENGTH
      ? `${elem.description.slice(0, MAX_TITLE_LENGTH)}...`
      : elem.description;
  return (
    <div className="card-list">
      <img src={elem.picture} alt="" className="card-image" />
      <h1 className="card-price">${elem.price}</h1>
      <h2 className="card-title">{elem.title}</h2>
      <h3 className="card-description">{truncatedTitle}</h3>
      <span className="card-category">{elem.category}</span>
      <span className="card-type">{elem.type}</span>
      <span className="card-day">{elem.day} дня</span>
      <button
        className="details"
        onClick={() => navigate(`/details/${elem.id}`)}
      >
        Подробнее
      </button>
      <button className="edit" onClick={() => navigate(`/edit/${elem.id}`)}>
        Изменить
      </button>
      <button className="delete" onClick={() => deleteProduct(elem.id)}>
        Удалить
      </button>
    </div>
  );
};

export default CardProduct;
