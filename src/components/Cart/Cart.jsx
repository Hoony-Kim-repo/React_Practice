import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  const onCloseCart = () => {
    progressContext.hideCart();
  };

  return (
    <Modal className="Cart" open={progressContext.progress === "cart"}>
      <h2>Your Cart</h2>

      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

      <p className="modal-actions">
        <Button textOnly onClick={onCloseCart}>
          Close
        </Button>
        <Button onClick={onCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
