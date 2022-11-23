import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import "./App.css";
import UseReducer from "./pages/useReducer/UseReducer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/reducer" element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
