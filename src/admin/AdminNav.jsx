import React from "react";
import { Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth";
import logo from "../assets/images/cirk.png";
import "../styles/admin-nav.css";

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];
const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin__header">
        <Container>
          <div className="admin__nav-top">
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <Link to="/home">
                  <img src={logo} alt="" />
                </Link>
                <div>
                  <Link to="/home">
                    <h1>Cirkle K</h1>
                  </Link>
                  <p style={{ fontSize: "13px" }}>Since 1999</p>
                </div>
              </div>
              <div className="search__box">
                <input type="text" placeholder="Search....." />
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-3-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={currentUser && currentUser.photoURL} alt=""></img>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
