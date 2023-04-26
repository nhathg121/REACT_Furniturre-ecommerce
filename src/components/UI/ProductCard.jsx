import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

import "../../styles/product-card.css";

const ProductCard = ({ data }) => {
  const { id, productName, category, price, imgUrl } = data;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: id,
        productName: productName,
        imgUrl: imgUrl,
        price: price,
      })
    );
    toast.success("Product added to cart");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__ item">
        <motion.div className="product__img" whileHover={{ scale: 0.94 }}>
          <img src={imgUrl} alt="productsImg" />
        </motion.div>

        <div className="p-2 product__info">
          <Link to={`/shop/${id}`}>
            <h3 className="product_name">{productName}</h3>
          </Link>
          <span>{category}</span>
        </div>
        <div className="product__card-bottom p-2  d-flex align-items-center justify-content-between">
          <span className="price">${price}</span>
          <motion.span whileTap={{ scale: 1.14 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
