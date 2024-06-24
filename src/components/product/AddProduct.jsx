import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct, categories, getCategories } = useProducts();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    getCategories();
  }, []);
  const handleSave = () => {
    const newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    addProduct(newProduct);
  };
  return (
    <div>
      <h2>add product</h2>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        placeholder="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Выбери категори...</option>
        {categories.map((elem) => (
          <option key={elem.id} value={elem.id}>
            {elem.title}
          </option>
        ))}
      </select>
      <button onClick={handleSave}>Save Product</button>
    </div>
  );
};

export default AddProduct;
