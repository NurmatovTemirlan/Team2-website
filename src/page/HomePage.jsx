import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { CSSTransition } from "react-transition-group";
import Сontacts from "./Сontacts";

const HomePage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const [activeButton, setActiveButton] = useState("group");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div className="container">
      <div className="part_1">
        <img
          className="image"
          src="https://static.tildacdn.one/tild3031-6132-4564-b263-373832616365/1049450929_0_79_2497.jpg"
          alt=""
        />
        <h2 className="h2_1">
          <span className="text1">Туры по Кыргызстану</span>
          <br />
          <span className="text2">напрямую от организатора</span>
        </h2>
        <h3 className="h3_1">
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
        <div className="social-icon-container">
          <div className="social-icon" onClick={handleToggle}>
            <FontAwesomeIcon icon={faComments} />
          </div>
          <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="social-menu"
            unmountOnExit
          >
            <div className="social-menu">
              <a
                href="https://t.me/gkaialrlaua"
                className="social-link"
                target="blank"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                href="https://www.instagram.com"
                className="social-link"
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.whatsapp.com"
                className="social-link"
                target="blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className="part_2">
        <div>
          <img
            className="image_2"
            src="https://static.vecteezy.com/system/resources/previews/014/234/190/non_2x/mountain-climbing-route-to-peak-infographic-in-flat-design-vector.jpg"
            alt=""
          />
        </div>
        <img
          className="image_2_2"
          src="https://static.tildacdn.one/tild3739-3663-4835-b832-663538376264/line_dot.svg"
          alt=""
        />
        <img
          src="https://static.tildacdn.one/tild3435-3633-4439-a135-663332393637/location.png"
          alt=""
          className="image_2_3"
        />
        <h2 className="h2_2">
          <span className="text4">Туры из</span> <br />
          <span className="text5">Бишкека</span>
        </h2>
        <h3 className="h3_2">
          Избранные маршруты и природные достопримечательности Кыргызстана
        </h3>
      </div>
      <button
        className={`part_2_btn1 ${
          activeButton === "group" ? "active" : "inactive"
        }`}
        onClick={() => handleButtonClick("group")}
      >
        Групповые
      </button>
      <button
        className={`part_2_btn2 ${
          activeButton === "individual" ? "active" : "inactive"
        }`}
        onClick={() => handleButtonClick("individual")}
      >
        Индивидуальные
      </button>
      <button className="part_2_btn3" onClick={() => navigate("/tour")}>
        Все туры
      </button>
      <div className="tour"></div>
      <div className="part_3">
        <div className="part_3_text">
          <span className="part_3_1">Немного</span> <br />
          о нашей <br />
          компании
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card-header">
              <img
                src="https://static.tildacdn.one/tild6631-3763-4634-b331-626565393765/heart.gif"
                alt="Heart"
                className="card-img"
              />
              <span className="experience">10+</span>
            </div>
            <div className="card-content">
              <p>лет опыта в туризме</p>
            </div>
          </div>
          <div>
            <img
              src="https://static.tildacdn.one/tild3166-3731-4836-a635-636531613237/travelife_partner_lo.png "
              alt=""
              className="card-img2"
            />
            <br />
            <div className="card-img2_text">
              Статус Travelife Partner подтверждает <br />
              нашу приверженность экологичному <br /> и ответственному туризму
            </div>
          </div>
        </div>
      </div>
      <button className="part3_btn" onClick={() => navigate("/company")}>
        Узнать больше
      </button>
      <div className="part4">
        <div className="card_1">
          <img
            src="https://static.tildacdn.one/tild6135-6430-4239-b932-613437316636/frantisek-duris-4sJP.jpg"
            alt=""
          />
          <span className="card_1_text">
            Гарантия <br />
            лучшей цены
          </span>
          <span className="card_1_text1">Работаем без посредников</span>
        </div>
        <div className="card_2">
          <img
            src="https://static.tildacdn.one/tild3937-3533-4830-a634-316332633937/woman-taking-photo-r.jpg"
            alt=""
          />
          <img
            src="https://static.tildacdn.one/tild6161-6665-4933-b163-363833356635/8597a75de87c8f2ef7af.gif"
            alt=""
            className="card_2_img"
          />
        </div>
        <div className="card_1">
          <img
            src="https://static.tildacdn.one/tild6366-3434-4433-b364-346534323639/satisfied-traveler-w.jpg"
            alt=""
          />
          <span className="card_1_text2">
            5000+ <br />
            довольных <br />
            туристов
          </span>
        </div>
        <div className="card_1">
          <img
            src="https://static.tildacdn.one/tild3937-3336-4232-b732-363134393133/Guest-House-Altyn-Oi.jpg"
            alt=""
          />
          <span className="card_1_text3">
            Лучшие гиды <br /> и места <br /> размещения
          </span>
        </div>
      </div>
      <div className="part5">
        <div className="custom-text">
          Не нашёл желаемый тур? <br /> Разработаем твой собственный <br /> тур
          с индивидуальным маршрутом
        </div>
        <div className="part5_text">
          Заказать тур по
          <br />
          <span className="part_5_content_text">собственному</span> <br />
          маршруту
        </div>
        <div className="social-menu_part5">
          <a
            href="https://t.me/gkaialrlaua"
            className="social-link_part5"
            target="blank"
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://www.whatsapp.com"
            className="social-link_part5"
            target="blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <img
          src="https://static.tildacdn.one/tild6432-6265-4764-b332-666166313366/9121423.png"
          alt=""
          className="part5_img"
        />
      </div>
      <div className="region">
        <span className="region_text">Регионы</span>,откуда мы <br />{" "}
        отправляемся в путешествия
      </div>
      <div className="part6">
        <div className="part6_img">
          <img
            src="https://static.tildacdn.one/tild6166-3539-4439-a263-633636373562/kyrgyzstan.svg"
            alt=""
          />
        </div>
      </div>
      <img
        src="https://static.tildacdn.one/tild6366-3062-4435-a630-346165306135/line1.svg"
        alt=""
        className="part6_img_1"
      />
      <button className="part6_btn_1">Бишкек</button>
      <img
        src="https://static.tildacdn.one/tild6366-3062-4435-a630-346165306135/line1.svg"
        alt=""
        className="part6_img_2"
      />
      <button className="part6_btn_2">Ош</button>
      <img
        src="https://static.tildacdn.one/tild3130-6663-4564-a232-343162393232/line2.svg"
        alt=""
        className="part6_img_3"
      />
      <button className="part6_btn_3">Чолпон-Ата</button>
      <img
        src="https://static.tildacdn.one/tild3130-6663-4564-a232-343162393232/line2.svg"
        alt=""
        className="part6_img_4"
      />
      <button className="part6_btn_4">Каракол</button>
      <div className="part7">
        На нашем сайте вы найдете лучшие туры по Кыргызстану на 2024 год. <br />
        Мы предлагаем эксклюзивные авторские маршруты, групповые туры, <br />
        захватывающие однодневные туры и экскурсии в горы из Бишкека. <br />
        Наши туры разработаны, чтобы показать вам всю красоту и <br />
        разнообразие Кыргызстана, от величественных горных вершин до <br />
        богатой культуры и истории. Забронируйте свою путевку уже сегодня <br />
        и начните планировать путешествие мечты в Киргизию.
      </div>
      <div className="contacts-home">
        <Сontacts />
      </div>
    </div>
  );
};

export default HomePage;
