import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const onClose = () => {
    progressContext.hideCheckout();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const clientData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_SERVER_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: clientData,
        },
      }),
    });
  };

  return (
    <Modal open={progressContext.progress === "checkout"} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
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
