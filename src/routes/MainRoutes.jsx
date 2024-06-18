import React from "react";
import HomePage from "../page/HomePage";
import AboutCompany from "../page/AboutCompany";
import Сooperation from "../page/Сooperation";
import Tours from "../page/Tours";
import Сontacts from "../page/Сontacts";
import Сonsultation from "../page/Сonsultation";
import { Route, Routes } from "react-router-dom";
export const ADMIN_ROUTES = [];
const PUBLIC_ROUTES = [
  { id: 1, link: "/home", element: <HomePage /> },
  { id: 2, link: "/company", element: <AboutCompany /> },
  { id: 3, link: "/cooperation", element: <Сooperation /> },
  { id: 4, link: "/tour", element: <Tours /> },
  { id: 5, link: "/contact", element: <Сontacts /> },
  { id: 6, link: "/consultation", element: <Сonsultation /> },
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
