import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import AllProduct from "../admin/AllProduct";
import AddProducts from "../admin/AddProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
const Routers = () => {
  return (
    <Routes element={<Navigate to="/home" />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="shop/:id" element={<ProductDetails />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="dashboard/all-products" element={<AllProduct />}></Route>
        <Route path="dashboard/add-product" element={<AddProducts />}></Route>
        <Route path="dashboard/users" element={<Users />}></Route>
      </Route>

      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};

export default Routers;
