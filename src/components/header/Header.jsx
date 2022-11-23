import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../../contexts/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    filterDispatch,
  } = CartState();

  const [cartLength, setCartLength] = useState(cart.length);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  return (
    <Navbar bg="dark sticky-top " variant="dark" style={{ height: "80" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search Product Here"
            className="m-auto"
            onChange={(event) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: event.target.value,
              })
            }
          />
        </Navbar.Text>

        <Nav style={{ marginRight: 100 }}>
          <Dropdown>
            <Dropdown.Toggle split variant="success">
              <FaShoppingCart fontSize="25px" />
              {cartLength > 0 && <Badge bg="info">{cartLength}</Badge>}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {cartLength ? (
                <>
                  {cart.map((product) => {
                    return (
                      <span className="cart-item">
                        <img
                          className="cart-item-img"
                          src={product.image}
                          alt={product.name}
                        />
                        <div className="cart-item-detail">
                          <span>{product.name}</span>
                          <span>{"₹ " + product.price}</span>
                        </div>
                        <AiFillDelete
                          style={{ cursor: "pointer", fontSize: 20 }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                        />
                      </span>
                    );
                  })}
                  <Link to="/cart">
                    <Button style={{ width: "90%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
