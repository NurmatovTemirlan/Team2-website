import React from "react";
import Navbarr from "./components/product/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProductContext from "./components/context/ProductContext";

const App = () => {
  return (
    <div>
      <Navbarr />
      <MainRoutes />
    </div>
  );
};

export default App;
