import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CartState } from "../../contexts/Context";
import Ratings from "../ratings/Ratings";

const Filters = () => {
  const {
    filterState: { byStock, sort, byFastDelivery, byRating, bySearch },
    filterDispatch,
  } = CartState();

  console.log(byStock, sort, byFastDelivery, byRating, bySearch);

  return (
    <div className="filters sticky-sidebar">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          label="Ascending"
          name="group"
          type="radio"
          onChange={() =>
            filterDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          label="Decresing"
          name="group"
          type="radio"
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          label="Include Out Of Stock"
          name="group"
          type="checkbox"
          onChange={() => filterDispatch({ type: "FILTER_BY_IN_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          label="Fast Delivery"
          name="group"
          type="checkbox"
          onChange={() => filterDispatch({ type: "FILTER_BY_FAST_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Ratings :</label>
        <Ratings
          rating={byRating}
          style={{ cursor: "pointer" }}
          fontSize={"large"}
          // Getting Value of "index" from "Ratings" component (from child to parent
          // componenet) using arrow function.
          // Here "onClick()" is a user-defined function.
          onClick={(index) =>
            filterDispatch({ type: "FILTER_BY_RATING", payload: index + 1 })
          }
        />
      </span>
      <Button
        variant="light"
        onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
