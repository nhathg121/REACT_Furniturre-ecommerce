import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
const Routers = () => {
  return (
    <Routes element={<Navigate to="/home" />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="shop/:id" element={<ProductDetails />}></Route>
      <Route path="signup" element={<Signup />}></Route>

      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />{" "}
          </ProtectedRoute>
        }
      ></Route>

      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};

export default Routers;
