import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "reactstrap";
const ProductLists = () => {
  return (
    <Row>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Row>
  );
};

export default ProductLists;
