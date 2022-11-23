import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../contexts/Context";
import Ratings from "../ratings/Ratings";

const Product = (props) => {
  // Here 'product' is passed as props because we need single product not whole 'productArray'.
  const { product } = props;

  const {
    state: { cart },
    dispatch,
  } = CartState();

  // console.log(cart);
  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
        <Card.Img src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>{"₹ " + product.price}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Standard 3 Days Delivery</div>
            )}
            <Ratings rating={product.ratings} />
          </Card.Subtitle>
          {product.inStock ? (
            <div>
              {/* .some() -> iterates over the array & executes the code, if the 
                             given condition is satisfied */}
              {cart.some((currProduct) => currProduct.id === product.id) ? (
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: product })
                  }
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  Add To Cart
                </Button>
              )}
            </div>
          ) : (
            <Button variant="warning" disabled>
              Out Of Stock
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
