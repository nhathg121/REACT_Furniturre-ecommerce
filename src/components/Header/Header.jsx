import React from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import { Container, Row } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src="" alt="" />
              <div />
              <h1>Multimart</h1>
              <p>Since 1995</p>
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li className="nav_item">
                <NavLink to={"home"}>Home</NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={"shop"}>Shop</NavLink>
              </li>
              <li className="nav_item">
                <NavLink to={"cart"}>Cart</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__icons">
            <span className="fav__icon">
              <i class="ri-heart-line"></i>
            </span>
            <span className="cart__icon">
              <i class="ri-shopping-cart-line"></i>
            </span>
            <span className="cart__icon">
              <i class="ri-shopping-bag-line"></i>
            </span>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
