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
import counterImg from "../assets/images/counter-timer-img.png";

// components
import Services from "../services/Services";
import ProductLists from "../components/UI/ProductLists";
import Clock from "../components/UI/Clock";

const Home = () => {
  const year = new Date().getFullYear();
  const [trendingProducts, setTrendingProducts] = useState(products);
  const [bestSellingProducts, setBestSellingProducts] = useState(products);
  const [mobileProducts, setMobileProducts] = useState(products);
  const [wirelessProducts, setWirelessProducts] = useState(products);
  const [popularProducts, setpopularProducts] = useState(products);

  useEffect(() => {
    // filter for trending products
    const filterProducts = products.filter((item) => item.category === "chair");
    setTrendingProducts(filterProducts);

    // filter for best selling products
    const filterBestSellingProducts = products.filter(
      (item) => item.category === "sofa"
    );
    setBestSellingProducts(filterBestSellingProducts);

    // filter for mobile products
    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setMobileProducts(filterMobileProducts);

    // filter for wireless products
    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    setWirelessProducts(filterWirelessProducts);

    //filter for popular products
    const filterPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setpopularProducts(filterPopularProducts);
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
              <h2 className="section__title mb-5">Trending Products</h2>
            </Col>
            <ProductLists data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">Top Selling</h2>
            </Col>
            <ProductLists data={bestSellingProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offer </h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1.3 }}
                className="buy__btn store__btn"
              >
                <Link to="./shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" sm="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">New Arrivals</h2>
            </Col>
            <ProductLists data={mobileProducts} />
            <ProductLists data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title mb-5">Popular in Category</h2>
            </Col>
            <ProductLists data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
