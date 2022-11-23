import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    // break;
    case "decrement":
      return { count: state.count - 1 };
    // break;
    default:
      return state.count;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
};

export default UseReducer;
