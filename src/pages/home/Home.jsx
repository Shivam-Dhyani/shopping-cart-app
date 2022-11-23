import { CartState } from "../../contexts/Context";
import Filters from "../../components/filters/Filters";
import Product from "../../components/product/Product";
import "./Home.css";

const Home = () => {
  const {
    state: { productArray },
    filterState: { byStock, sort, byFastDelivery, byRating },
  } = CartState();

  const filteredProducts = () => {
    var sortedProductArray = productArray;

    if (sort) {
      sortedProductArray = sortedProductArray.sort((productA, productB) => {
        return sort === "lowToHigh"
          ? productA.price - productB.price
          : productB.price - productA.price;
      });
    } else {
      sortedProductArray = productArray;
    }

    if (!byStock) {
      sortedProductArray = sortedProductArray.filter(
        (product) => product.inStock
      );
    }

    if (byFastDelivery) {
      sortedProductArray = sortedProductArray.filter(
        (product) => product.fastDelivery
      );
    }

    if (byRating) {
      sortedProductArray = sortedProductArray.filter(
        (product) => product.ratings >= byRating
      );
    }
    console.log(sortedProductArray);

    return sortedProductArray;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {filteredProducts().map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
