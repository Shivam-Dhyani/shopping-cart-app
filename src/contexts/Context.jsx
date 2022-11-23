import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "../reducers/Reducer";

const CartCreateContext = createContext();

const Context = (props) => {
  const { children } = props;

  const array = {
    ratings: [1, 2, 3, 4, 5],
    inStock: [0, 3, 5, 7, 9],
  };

  faker.seed(2022);

  const productArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      image: faker.image.image(),
      price: faker.commerce.price(),
      ratings: array.ratings[Math.floor(Math.random() * 5)],
      inStock: array.inStock[Math.floor(Math.random() * 5)],
      fastDelivery: faker.datatype.boolean(),
    };
  });

  const [state, dispatch] = useReducer(cartReducer, { productArray, cart: [] });

  const filterParameters = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    bySearch: "",
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterParameters
  );

  return (
    <CartCreateContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartCreateContext.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartCreateContext);
};
