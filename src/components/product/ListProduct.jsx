import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import CardProduct from "./CardProduct";
import "./Card.css";

const ListProduct = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      style={{ position: "relative", top: "40px" }}
      className="container-card"
    >
      {products.map((elem) => (
        <CardProduct elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ListProduct;
