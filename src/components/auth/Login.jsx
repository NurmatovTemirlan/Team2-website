import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните данные!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  };
  return (
    <div className="container-login">
      <div className="login">
        <h1>Войти</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          type="text"
        />
        <button onClick={handleSave}>Войти</button>
        <p onClick={() => navigate("/register")}>
          У вас нет учетной записи? Зарегистрироваться
        </p>
      </div>
    </div>
  );
};

export default Login;
