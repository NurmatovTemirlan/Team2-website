import React from "react";
import "./Cooperation.css";
import Сontacts from "./Сontacts";

const Сooperation = () => {
  return (
    <div className="tn-atom">
      <div className="cooperation-span">
        Сотрудничество <br /> с<span>нами</span>
      </div>
      <div className="container-cooperation">
        <span>Добро пожаловать на страницу сотрудничества с Too.kg</span>
        <div className="text-comtainer">
          <div className="text">
            <p>
              Мы готовы рассмотреть любые варианты сотрудничества с
              туристическими агентствами, отелей и другими компаниями или
              лицами, которые заинтересованы в организации туров и любых
              туристических услуг в Кыргызстане. Наша компания предоставляет
              широкий спектр туров, включая пешие и конные туры, восхождения на
              горные пики, экскурсии по достопримечательностям, организация
              конференций, трансферы и многое другое.
            </p>
            <p>
              Мы ценим наших партнеров и готовы предложить выгодные условия
              сотрудничества. Наша компания гарантирует качество услуг, которые
              мы предоставляем нашим гостям. Мы имеем большой опыт работы с
              туристами из разных стран мира и знаем, как организовать
              незабываемый отдых. Мы также готовы предоставить специальные цены
              и условия для корпоративных клиентов и групповых туристов. Мы
              можем предложить индивидуальный подход к каждому клиенту и
              разработать тур, который соответствует их потребностям и желаниям.
            </p>
            <p>
              Если вы заинтересованы в сотрудничестве с нашей компанией,
              пожалуйста, свяжитесь с нами по почте: info@too.kg или в
              <a href="whatsapp://send?phone=номер_телефона">WhatsApp</a>,
              <a href="telegram://send?phone=номер_телефона">Telegram</a>и мы
              обязательно ответим на все ваши вопросы и предложим выгодные
              условия сотрудничества. Мы готовы работать с вами на долгосрочной
              основе и развивать наш бизнес вместе!
            </p>
            <img
              className="img-cooperation"
              src="https://lh3.googleusercontent.com/pw/AP1GczMdoAjKrYMpeN-ZqXDzf8n25lfejJ5u5CWGlsaEiideop6sQbb4zodfpCgpeuv1PGaZPp3bM56LI_EHG3zvT-TaD82QUVYZsjqDQDGYaMmDaIyCubXRvYC7h7b1w909WiuNI15m35Ib2MDyfR2uQKwI=w685-h913-s-no-gm?authuser=0"
            />
            C уважением,
            <h5>
              Директор — Нурматов Темирлан (<span>Профиль в LinkedIn</span>)
            </h5>
          </div>
        </div>
      </div>
      <div className="contacts-cooperation">
        <Сontacts />
      </div>
    </div>
  );
};

export default Сooperation;
