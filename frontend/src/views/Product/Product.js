import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../../components/Rating/Rating";
import products from "../../products";
import ProductDropdown from "../../components/ProductDropdown/ProductDropdown";

import "./Product.css";

const Product = ({ match }) => {
  let sizeOptions;
  const product = products.find((p) => p._id === match.params.id);
  if (product.sizes) {
    sizeOptions = product.sizes;
  }

  return (
    <>
      <Link className="btn btn-outline-dark my-3 mr-10" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={4}>
          <Image
            src={product.image}
            alt={product.name}
            className="product-view-image"
            fluid
          />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              {sizeOptions ? (
                <ListGroup.Item>
                  <ProductDropdown select={sizeOptions} />
                </ListGroup.Item>
              ) : null}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Availability:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
                      "In Stock"
                    ) : (
                      <p className="out-of-stock-text">Out of Stock</p>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 ? (
                <ListGroup.Item>
                  <button type="button" class="btn btn-dark btn-block">
                    Add to Cart
                  </button>
                </ListGroup.Item>
              ) : null}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Product;
