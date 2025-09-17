import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, name, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const onAddItem = () => {
    dispatch(cartActions.addItem({ id, name, price }));
  };

  const onRemoveItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItem}>-</button>
          <button onClick={onAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
