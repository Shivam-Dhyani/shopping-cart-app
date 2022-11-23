import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../../contexts/Context";
import Ratings from "../../components/ratings/Ratings";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumulator, current) =>
          accumulator + Number(current.price) * current.quantity,
        0
      )
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => {
            return (
              <ListGroup.Item key={product.id}>
                <Row className="justify-content-md-center">
                  <Col md={3}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={2}>
                    <span>{product.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>₹ {product.price}</span>
                  </Col>
                  <Col md={2}>
                    <Ratings rating={product.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={product.quantity}
                      onChange={(event) => {
                        dispatch({
                          type: "CHANGE_PRODUCT_QUANTITY",
                          payload: {
                            id: product.id,
                            quantity: event.target.value,
                          },
                        });
                      }}
                    >
                      {/* Here "keys()" function is applied on the array of length "product.inStock" so 
                          that, that same empty array get filled by the index values(i.e. keys) of those 
                          undefined elements of it. Those keys are then used to show stock availability of
                          the product, in the cart.*/}
                      {[...Array(parseInt(product.inStock)).keys()].map(
                        (ele) => {
                          return <option key={ele + 1}>{ele + 1}</option>;
                        }
                      )}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="light"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        });
                      }}
                    >
                      <AiFillDelete fontSize={20} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontSize: 20, fontWeight: 700 }}>Total : ₹{total}</span>
        {cart.length === 0 ? (
          <Button variant="success" disabled>
            Proceed To Checkout
          </Button>
        ) : (
          <Button variant="outline-success">Proceed To Checkout</Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
