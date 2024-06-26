import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = ({ isEdit }) => {
  const { createProduct, oneProduct, editProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    type: "",
    day: "",
    picture: "",
  });
  useEffect(() => {
    if (isEdit && oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleEditClick() {
    for (let key in product) {
      if (!product[key]) {
        alert("заполните");
        return;
      }
    }
    editProduct(product);
    setProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      type: "",
      day: "",
      picture: "",
    });
    navigate("/tour");
  }

  function handleInp(e) {
    if (e.target.name === "day") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct({
      title: "",
      description: "",
      price: "",
      category: "",
      type: "",
      day: "",
      picture: "",
    });
  }
  return (
    <div className="form">
      <div className="container-form">
        {isEdit ? <p className="p">ИЗМЕНИТЬ</p> : <p className="p">ADMIN</p>}

        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleInp}
          value={product.title}
          className="input"
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleInp}
          value={product.description}
          className="input"
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          onChange={handleInp}
          value={product.price}
          className="input"
        />
        <select
          name="category"
          onChange={handleInp}
          value={product.category}
          className="select"
        >
          <option value="" disabled selected>
            Категория
          </option>
          <option>Групповые</option>
          <option>Индивидуальные</option>
        </select>
        <select
          name="type"
          onChange={handleInp}
          value={product.type}
          className="select"
        >
          <option value="" disabled selected>
            Вид тура
          </option>
          <option value="Приключенческий">Приключенческий</option>
          <option value="Комфортный">Комфортный</option>
          <option value="Поход">Поход</option>
          <option value="Экскурсионный">Экскурсионный</option>
        </select>
        <input
          type="number"
          placeholder="day"
          name="day"
          onChange={handleInp}
          value={product.day}
          className="input"
        />
        <input
          type="text"
          placeholder="URL"
          name="picture"
          onChange={handleInp}
          value={product.picture}
          className="input"
        />
        {isEdit ? (
          <button onClick={handleEditClick} className="button button-secondary">
            Сохранить
          </button>
        ) : (
          <button onClick={addProduct} className="button">
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
