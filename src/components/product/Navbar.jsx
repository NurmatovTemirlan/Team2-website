import React, { useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Navbarr = () => {
  const { currentUser, handleLogOut, checkAuth } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);
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
          onClick={() => navigate("/")}
          className="nav-logo"
          src="https://static.tildacdn.one/tild3237-6562-4566-b066-626537653761/512logo.png"
          alt="Logo"
        />
        <button className="nav_btn" onClick={() => navigate("")}>
          Консультация
        </button>
        <div className="avatar" onClick={() => navigate("/register")}>
          <Avatar
            src="/broken-image.jpg"
            style={{ backgroundColor: "orangered" }}
          />
        </div>
        <div className="user-log">
          {currentUser ? currentUser : "Нет аккаунта"}
          {currentUser ? (
            <button onClick={handleLogOut} className="user-btn">
              Выйти
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbarr;
