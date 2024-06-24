import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthContext from "./components/context/AuthContext";
import ProductContext from "./components/context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <AuthContext>
        <App />
      </AuthContext>
    </ProductContext>
  </BrowserRouter>
);
