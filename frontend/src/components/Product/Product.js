import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import Rating from "../../components/Rating/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="product-image" />
      </a>
      <Card.Body className="product-card-body">
        <a href={`/product/${product._id}`}>
          <Card.Title as="div" className="product-card-title">
            {product.name}
          </Card.Title>
        </a>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="div" className="product-price">
          {product.price
            ? `$ ${product.price.toFixed(2)}`
            : "Please call for pricing"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
