import { createStore } from "redux";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "increase":
      return { counter: state.counter + action.payload };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
