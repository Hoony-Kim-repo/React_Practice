import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={onToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
