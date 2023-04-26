import React, { useState, useRef, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductLists from "../components/UI/ProductLists";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import avatarImg from "../assets/images/avatar.png";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;
  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    toast.success("Review added successfully");
  };
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added to cart successfully");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet>
      <CommonSection title="Product Detail" />
      <section className="pt-0 ">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    ( <span>{avgRating}</span> Rating)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5 ">
                  <span className="product__price">$ {price} </span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.1 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  onClick={() => setTab("desc")}
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5 bg-light p-5">
                  <p>{description}</p>
                </div>
              ) : tab === "rev" ? (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li key={index} className="d-flex align-item-top mt-2">
                          <div className="review__info-left avatar_user mt-3">
                            <img src={avatarImg} alt="" />
                          </div>

                          <div className="review__info-left  mx-3  p-3">
                            <span className="d-flex justify-content-between">
                              <div>
                                <h5 className="py-3">Username {index + 1}</h5>
                                <p className="pb-3">
                                  {Math.floor(Math.random() * 30) + 1}/
                                  {Math.floor(Math.random() * 12) + 1}/2022
                                </p>
                              </div>
                              <span className="py-3">
                                <span>
                                  <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                  <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                  <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                  <i className="ri-star-s-fill"></i>
                                </span>
                                <span>
                                  <i className="ri-star-s-fill"></i>
                                </span>
                              </span>
                            </span>
                            <p className="bg-light p-5">
                              {item.text}
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Ab, provident temporibus libero
                              beatae minima voluptatibus dolorum iure corporis?
                              Incidunt doloremque vitae fugiat blanditiis quos
                              sunt commodi voluptatum maxime odio beatae.
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
              <div className="review__form">
                <form action="#" onSubmit={submitHandler}>
                  <h4>Leave your experience </h4>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter name"
                      ref={reviewUser}
                      required
                    />
                  </div>

                  <div className="form__group d-flex align-items-center gap-5 rating__group">
                    <span onClick={() => setRating(1)}>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(2)}>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="form__group">
                    <textarea
                      rows={4}
                      type="text"
                      placeholder="Review Message ...."
                      ref={reviewMsg}
                      required
                    />
                  </div>
                  <button type="submit" className="buy__btn">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title"> You might also like</h2>
            </Col>
            <ProductLists data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
