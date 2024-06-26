import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../helpers/const";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);
  // ! regisret
  const handleRegister = async (formData) => {
    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      console.log(res, "Заркгис");
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };

  // ! login
  const handleLogin = async (formData, email) => {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      console.log(res);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };
  // ! logOut
  const handleLogOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/login");
  };
  //! checkAuth
  const checkAuth = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const { data } = await axios.post(`${API}/account/token/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: data, refresh: tokens.refresh })
      );
      const email = JSON.parse(localStorage.getItem("email"));
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    error,
    handleRegister,
    handleLogin,
    currentUser,
    handleLogOut,
    checkAuth,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
