// import { Component } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(counterActions.increment());
  };

  const onIncrease = () => {
    dispatch(counterActions.increase(5));
  };

  const onDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {counterState.showCounter && (
        <div className={classes.value}>{counterState.counter}</div>
      )}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onIncrease}>Increase By 10</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   onIncrement() {
//     this.props.increment();
//   }

//   onDecrement() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>

//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.onIncrement.bind(this)}>Increment</button>
//           <button onClick={this.onDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
