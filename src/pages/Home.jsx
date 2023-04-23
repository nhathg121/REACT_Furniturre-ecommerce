// react lib
import React, { useState, useEffect } from "react";

// npm library
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";

// title helmet
import Helmet from "../components/Helmet/Helmet";

// css
import "../styles/home.css";

// data
import products from "../assets/data/products";
import heroImg from "../assets/images/hero-img.png";

// components
import Services from "../services/Services";
import ProductLists from "../components/UI/ProductLists";

const Home = () => {
  const year = new Date().getFullYear();
  const [data, setData] = useState(products);

  useEffect(() => {
    const filterProducts = products.filter((item) => item.category === "chair");
    setData(filterProducts);
  }, []);
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2> Make Your Interior More Minimlistic & Modern</h2>
                <p>
                  Cirkle K simply the best choice for your new website. Your
                  search for the best solution is over, get your own copy and
                  join thousands of happy customers.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 1.05 }}
                  className="buy__btn"
                >
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trendding__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <ProductLists />
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
