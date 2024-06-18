import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <img
        className="image"
        src="https://static.tildacdn.one/tild3031-6132-4564-b263-373832616365/1049450929_0_79_2497.jpg"
        alt=""
      />
      <h2>
        <span className="text1">Туры по Кыргызстану</span>
        <br />
        <span className="text2">напрямую от организатора</span>
      </h2>
      <h3>
        <ul className="text3">
          <li>Групповые туры каждую неделю</li>
          <li>Индивидуальные путешествия</li>
          <li>Авторские туры</li>
        </ul>
      </h3>
      <button className="btn_1" onClick={() => navigate("/tour")}>
        Выбрать тур
      </button>
      <button className="btn_2" onClick={() => navigate()}>
        Заказать <br /> персональный тур
      </button>
    </div>
  );
};

export default HomePage;
