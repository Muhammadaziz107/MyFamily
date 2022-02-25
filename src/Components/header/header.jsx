import React, { useRef, useState } from "react";
import "./header.css";

//components
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import Logo from "../../Assets/Images/logo.svg";

function Header() {
  const elNavbar = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const phoneNumber = {
    number: "998 33 123 23 12",
  };

  return (
    <>
      <div className="header ">
        <div className="header__wrapper container">
          <div className="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#C9AF89"
              rounded
              hideOutline={false}
              size={25}
              direction="right"
              onToggle={evt => {
                elNavbar.current.classList.toggle("header__navbar--active");
              }}
            />
          </div>
          {/* ============ */}
          <NavLink className="header__logo-wrapper" to="/">
            <img className="header__logo" src={Logo} alt="Site logo" />
          </NavLink>
          <div className="header__navbar-wrapper">
            <nav className="header__navbar " ref={elNavbar}>
              <ul className="header__navbar__list">
                <li className="header__navbar__list__item">
                  <NavLink
                    className="header__navbar__list__item__link header__navbar__list__item__link--active"
                    to="/"
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
                  <NavLink className="header__navbar__list__item__link" to="/contact">
                    Aloqa
                  </NavLink>
                </li>
                <li className="header__navbar__list__item">
                  <a
                    className="header__navbar__phone--active"
                    href={"tel:+" + phoneNumber.number}
                  >
                    +{phoneNumber.number}
                  </a>
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
