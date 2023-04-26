import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center"> No Item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr key={index} item={item} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between mb-2">
                  SUBTOTAL
                  <span className="fs-4 f-bold -">${totalAmount}</span>
                </h6>
              </div>
              <p>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn w-100 ">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="buy__btn w-100 mt-0">
                  <Link to="/shop">Continued Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  const { imgUrl, productName, price, quantity } = item;
  return (
    <tr>
      <td>
        <img src={imgUrl} alt="" />
      </td>
      <td>{productName}</td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.5 }}
          onClick={deleteProduct}
          className="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
