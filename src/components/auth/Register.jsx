import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const { handleRegister, currentUser, handleLogOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните данные!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    handleRegister(formData);
  };
  return (
    <div className="container-register">
      <div className="register">
        <h2>Регистрация</h2>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Подтвердить пароль"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button onClick={handleSave}>Зарегистрироваться</button>
        <p onClick={() => navigate("/login")}>
          Уже есть аккаунт? Авторизоваться
        </p>
      </div>
    </div>
  );
};

export default Register;
