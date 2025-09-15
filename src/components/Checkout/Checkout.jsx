import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const Checkout = ({ item }) => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const onClose = () => {
    progressContext.hideCheckout();
  };

  return (
    <Modal open={progressContext.progress === "checkout"} onClose={onClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={onClose}>
            Close
          </Button>
          <Button>Place Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
