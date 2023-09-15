import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  
  // const themeTextColor = useSelector((state) => state.theme.color)
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="value">{count}</span>
        <button
          aria-label="Decrement value"
          className="button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button className="button" onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </div>
  );
}
