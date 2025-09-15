import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (_item) => {},
  removeItem: (_id) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const updatedItems = [...state.items];

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.payload, quantity: 1 });
      }

      return { ...state, items: updatedItems };

    case "REMOVE_ITEM":
      const removingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const existingCartItem = state.items[removingItemIndex];

      if (existingCartItem.quantity === 1) {
        const updatedItems = [...state.items];
        updatedItems.splice(removingItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };

        updatedItems[removingItemIndex] = updatedItem;
      }

      return { ...state, items: updatedItems };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    items: state.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);

  return <CartContext value={cartContext}>{children}</CartContext>;
};

export { CartContext, CartContextProvider };
