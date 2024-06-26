import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import "./Details.css";
const DetailsPage = () => {
  const { oneProduct, getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      {oneProduct ? (
        <div>
          <img src={oneProduct.picture} alt="" className="card-image" />
          <h1 className="card-price">${oneProduct.price}</h1>
          <h2 className="card-title">{oneProduct.title}</h2>
          <h3 className="card-description">{oneProduct.description}</h3>
          <span className="card-category">{oneProduct.category}</span>
          <span className="card-type">{oneProduct.type}</span>
          <span className="card-day">{oneProduct.day} дня</span>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default DetailsPage;
