import React from "react";
import { useReducer } from "react";
const initialState = 10;
const reducer = (state, action) => {
  switch (action.type) {
    case "inc": {
      return state + 1;
    }
    case "dec": {
      return state - 1;
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>{state}</h3>
      <button onClick={() => dispatch({ type: "inc" })}>increament</button>
      <button onClick={() => dispatch({ type: "dec" })}>decreament</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Counter;
