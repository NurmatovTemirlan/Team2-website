import React from "react";
import HomePage from "../page/HomePage";
import AboutCompany from "../page/AboutCompany";
import Сooperation from "../page/Сooperation";
import Tours from "../page/Tours";
import Сontacts from "../page/Сontacts";
import Сonsultation from "../page/Сonsultation";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import AddProduct from "../components/product/AddProduct";
import EditProduct from "../components/product/EditProduct";
export const ADMIN_ROUTES = [
  { id: 1, link: "/add", element: <AddProduct /> },
  { id: 2, link: "/edit/:id", element: <EditProduct /> },
];
const PUBLIC_ROUTES = [
  { id: 1, link: "/", element: <HomePage /> },
  { id: 2, link: "/company", element: <AboutCompany /> },
  { id: 3, link: "/cooperation", element: <Сooperation /> },
  { id: 4, link: "/tour", element: <Tours /> },
  { id: 5, link: "/contact", element: <Сontacts /> },
  { id: 6, link: "/consultation", element: <Сonsultation /> },
  { id: 7, link: "/register", element: <Register /> },
  { id: 8, link: "/login", element: <Login /> },
];
const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
