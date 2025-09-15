import { useContext } from "react";
import logo from "../../assets/logo.jpg";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import Button from "../UI/Button";

const Header = () => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const totalItems = cartContext.items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);

  const onShowCart = () => {
    progressContext.showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>React Food Order</h1>
      </div>

      <nav>
        <Button textOnly onClick={onShowCart}>
          Cart ({totalItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
