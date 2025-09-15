import { useActionState, useContext } from "react";
import useHttp from "../../hooks/useHttp";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { currencyFormatter } from "../../util/formatting";
import Error from "../Error/Error";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const requestConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const progressContext = useContext(UserProgressContext);

  const { data, error, sendRequest, clearData } = useHttp(
    `${import.meta.env.VITE_SERVER_URL}/orders`,
    requestConfig
  );

  const cartTotal = cartContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const onClose = () => {
    progressContext.hideCheckout();
    clearData();
  };

  const onOrderFinish = () => {
    progressContext.hideCheckout();
    cartContext.clearCart();
    clearData();
  };

  const checkoutAction = async (prevState, formData) => {
    const clientData = Object.fromEntries(formData.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartContext.items,
          customer: clientData,
        },
      })
    );
  };

  const [_formState, formAction, pending] = useActionState(
    checkoutAction,
    null
  );

  let actions = (
    <>
      <Button type="button" textOnly onClick={onClose}>
        Close
      </Button>
      <Button>Place Order</Button>
    </>
  );

  if (pending) actions = <span>Sending order Data...</span>;

  if (data && !error) {
    return (
      <Modal
        open={progressContext.progress === "checkout"}
        onClose={onOrderFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={onOrderFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progressContext.progress === "checkout"} onClose={onClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
