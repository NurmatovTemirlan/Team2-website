import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbarr = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="nav-links" onClick={() => navigate("/company")}>
              О компании
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => navigate("/cooperation")}>
              Сотрудничество
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => navigate("/tour")}>
              Туры
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={() => navigate("/contact")}>
              Контакты
            </a>
          </li>
        </ul>
        <img
          onClick={() => navigate("/home")}
          className="nav-logo"
          src="https://static.tildacdn.one/tild3237-6562-4566-b066-626537653761/512logo.png"
          alt="Logo"
        />
        <button className="nav_btn" onClick={() => navigate("/tour")}>
          Консультация
        </button>
      </nav>
    </div>
  );
};

export default Navbarr;
