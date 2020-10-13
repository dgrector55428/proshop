import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row className="d-flex jutify-content-center">
        {products.map((product) => {
          return (
            <Col key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
