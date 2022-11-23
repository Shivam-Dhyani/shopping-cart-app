export const cartReducer = (state, action) => {
  // 'action' object has 2 properties in it -> type & payload.

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
      break;

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
      break;

    case "CHANGE_PRODUCT_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((product) =>
          product.id === action.payload.id
            ? (product.quantity = action.payload.quantity)
            : product.quantity
        ),
      };
      break;

    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  // 'action' object has two properties in it -> type & payload
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
      break;

    case "FILTER_BY_IN_STOCK":
      return { ...state, byStock: !state.byStock };
      break;

    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
      break;

    case "FILTER_BY_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
      break;

    case "FILTER_BY_SEARCH":
      return { ...state, bySearch: action.payload };

    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
      };
      break;

    default:
      return state;
  }
};
