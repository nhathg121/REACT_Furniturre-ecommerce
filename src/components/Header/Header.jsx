import React, { useEffect, useRef } from "react";
import "./header.css";

import { motion } from "framer-motion";

import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/cirk.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";

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
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const currentUser = useAuth();
  console.log(currentUser);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current.classList.add("sticky__header");
      } else {
        headerRef?.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  const menuToggle = () => {
    menuRef?.current.classList.toggle("active__menu");
  };
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <header className="header" ref={headerRef}>
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
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line" />
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                />
              </span>
              {/* Mobile menu */}
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line "></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
