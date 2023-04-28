import React, { useEffect, useRef } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cirk.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
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
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.boby.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
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
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* logo */}
            <Link to="/home">
              {" "}
              <div className="logo">
                <img src={logo} alt="" />
                <div>
                  <h1>Cirkle K</h1>
                  <p style={{ fontSize: "13px" }}>Since 1999</p>
                </div>
              </div>
            </Link>
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

              <div className="profile">
                <motion.img
                  src={currentUser ? currentUser.photoURL : userIcon}
                  whileTap={{ scale: 1.2 }}
                  alt=" "
                  onClick={toggleProfileActions}
                ></motion.img>

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <div className="d-flex flex-column align-items-center">
                      <span onClick={logout}>Logout</span>
                      <span>
                        <Link to="/dashboard">Dashboard</Link>
                      </span>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/dashboard">Dashboard</Link>
                    </div>
                  )}
                </div>
              </div>
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
