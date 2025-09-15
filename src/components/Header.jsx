import { useContext } from "react";
import logo from "../assets/logo.jpg";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";

const Header = () => {
  const cartContext = useContext(CartContext);

  const totalItems = cartContext.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React Food Order</h1>
      </div>

      <nav>
        <Button textOnly>Cart ({totalItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
