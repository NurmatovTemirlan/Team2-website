import React from "react";
import "./Contacts.css";
import { useNavigate } from "react-router-dom";
const Сontacts = () => {
  const navigate = useNavigate();
  return (
    <div className="container-contacts">
      <div className="logo">
        <img
          src="https://static.tildacdn.one/tild3237-6562-4566-b066-626537653761/512logo.png"
          alt="Too.kg Logo"
        />
        <p>Туроператор №1 по Кыргызстану</p>
      </div>
      <div className="contacts">
        <h2>Контакты</h2>
        <p>+996 550 689 000</p>
        <p>
          <a href="mailto:info@too.kg">info@too.kg</a>
        </p>
        <p>
          Кыргызстан
          <br />
          720001 г. Бишкек
          <br />
          ул. Туркебекова 109/3
          <br />8 этаж 804 офис
        </p>
      </div>
      <div className="information">
        <h2>Информация</h2>
        <ul>
          <li>
            <a href="#">Отдых в Кыргызстане</a>
          </li>
          <li>
            <a href="#">Пограничный пропуск</a>
          </li>
          <li>
            <a href="#">Достопримечательности</a>
          </li>
          <li>
            <a href="#">Чем заняться</a>
          </li>
          <li>
            <a href="#">Культура и традиции</a>
          </li>
        </ul>
      </div>
      <div className="about-us">
        <h2>О нас</h2>
        <ul>
          <li>
            <a href="" onClick={() => navigate("/company")}>
              О компании
            </a>
          </li>
          <li>
            <a href="#">Туры</a>
          </li>
          <li>
            <a href="#">Сотрудничество</a>
          </li>
          <li>
            <a href="#">Публичная оферта</a>
          </li>
          <li>
            <a href="#">Политика конфиденциальности</a>
          </li>
          <li>
            <a href="#">Политика устойчивости</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Сontacts;
