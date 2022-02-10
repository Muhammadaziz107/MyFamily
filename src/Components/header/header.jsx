import React, { useRef, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import hamburgerOpen from "../../Assets/Images/hamburger-open.svg";

import Logo from "../../Assets/Images/logo.svg";

function Header() {
  const phoneNumber = {
    number: "998 33 123 23 12",
  };

  return (
    <>
      <div className="header">
        <div className="header__wrapper container">
          <button className="hamburger-btn" type="button">
            <img src={hamburgerOpen} alt="hamburger open icon" width={20} height="16" />
          </button>
          {/* ============ */}
          <NavLink className="header__logo-wrapper" to="/">
            <img className="header__logo" src={Logo} alt="Site logo" />
          </NavLink>

          <div className="header__navbar-wrapper">
            <nav className="header__navbar">
              <ul className="header__navbar__list">
                <li className="header__navbar__list__item">
                  <NavLink
                    className="header__navbar__list__item__link header__navbar__list__item__link--active"
                    to="/about"
                  >
                    BOSH SAHIFA
                  </NavLink>
                </li>
                <li className="header__navbar__list__item">
                  <NavLink className="header__navbar__list__item__link" to="/about">
                    Biz haqimizda
                  </NavLink>
                </li>
                <li className="header__navbar__list__item">
                  <NavLink className="header__navbar__list__item__link" to="/blogs">
                    Bloglar
                  </NavLink>
                </li>
                <li className="header__navbar__list__item">
                  <NavLink className="header__navbar__list__item__link" to="/call">
                    Aloqa
                  </NavLink>
                </li>
              </ul>
            </nav>

            <a className="header__navbar__phone" href={"tel:+" + phoneNumber.number}>
              +{phoneNumber.number}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
