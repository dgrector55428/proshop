import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import Rating from "../../components/Rating/Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="product-image" />
      </Link>
      <Card.Body className="product-card-body">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-card-title">
            {product.name}
          </Card.Title>
        </Link>
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
