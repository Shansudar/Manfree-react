import React from "react";
import { useReducer } from "react";
const initialState = {
  name: "",
  age: 30,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "print": {
      console.log(state);
      return state;
    }
  }
};
const Shop = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>
        {state.name} - {state.age}
      </h2>
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "print" })}>Submit</button>
    </div>
  );
};

export default Shop;
