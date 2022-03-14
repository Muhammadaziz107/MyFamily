import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

//images
import logo from "../../Assets/Images/logo.svg";
import telegram from "../../Assets/Images/telegram.svg";
import instagram from "../../Assets/Images/instagram.svg";
import youtube from "../../Assets/Images/youtube.svg";
import facebook from "../../Assets/Images/facebook.svg";
import abutechLogo from "../../Assets/Images/abutech.svg";

function Footer() {
  const phoneNumber = {
    number: "998 (33) 123 23 12",
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo-wrapper">
            <img src={logo} alt="footer site logo" width="145" height="42" />
            <p className="footer__logo-wrapper__text">
              "MyFamily" oila maktabi — baxtiyor turmush sari!
            </p>
          </div>

          <div className="footer__navbar">
            <ul className="footer__navbar__list">
              <li className="footer__navbar__list__item">
                <NavLink className="footer__navbar__list__item__link" to="/about">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="footer__navbar__list__item">
                <NavLink className="footer__navbar__list__item__link" to="/courses">
                  Kurslar
                </NavLink>
              </li>
              <li className="footer__navbar__list__item">
                <NavLink className="footer__navbar__list__item__link" to="/blogs">
                  Bloglar
                </NavLink>
              </li>
              <li className="footer__navbar__list__item">
                <NavLink className="footer__navbar__list__item__link" to="/contact">
                  Aloqa
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__adress">
            <h4 className="footer__adress__phone"><a href={"tel:+" + phoneNumber.number}>
                    +{phoneNumber.number}
                  </a></h4>
            <p className="footer__adress__address">
              Toshkent shahri, Amir Temur ko'chasi, 1-uy
            </p>
          </div>
        </div>

        <span className="footer__line"></span>
        <div className="footer__bottom">
          <div className="footer__bottom__links">
            <ul className="footer__bottom__list">
              <li className="footer__bottom__list__item">
                <a href="www.telegram.org">
                  <img src={telegram} alt="telegram icon" width="46" height="46" />
                </a>
              </li>
              <li className="footer__bottom__list__item">
                <a href="www.instagram.com">
                  <img src={instagram} alt="telegram icon" width="46" height="46" />
                </a>
              </li>
              <li className="footer__bottom__list__item">
                <a href="www.youtube.com">
                  <img src={youtube} alt="telegram icon" width="46" height="46" />
                </a>
              </li>
              <li className="footer__bottom__list__item">
                <a href="www.facebook.com">
                  <img src={facebook} alt="telegram icon" width="46" height="46" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__bottom__div">
            <p className="footer__bottom__div__text">
              © 2021 MyFamily. Barcha huquqlar himoyalangan
            </p>

            <div className="footer__bottom__logo">
              <img
                className="footer__bottom__logo__img"
                src={abutechLogo}
                alt="abu tech logo"
                width="245"
                height="49"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
