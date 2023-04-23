import React from "react";
import "./header.css";

import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>Cirkle K</h1>
                <p>Since 1995</p>
              </div>
            </div>
            {/* navigation */}
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : " "
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Icons */}
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line" />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-cart-line" />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line" />
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            {/* Mobile menu */}
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line "></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
