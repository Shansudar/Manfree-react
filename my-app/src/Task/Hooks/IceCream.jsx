import React from "react";
import { useReducer } from "react";
const initialState = {
  iceCount: 50,
  cakeCount: 10,
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "orderIce": {
      if (action.payload < 5) {
        return {
          ...state,
          iceCount: state.iceCount - action.payload,
          count: 0,
        };
      } else {
        const number = parseInt(state.count / 5);
        return {
          iceCount: state.iceCount - action.payload,
          cakeCount: state.cakeCount - number,
          count: 0,
        };
      }
    }

    case "orderCake": {
      return { ...state, cakeCount: state.cakeCount - action.payload };
    }
    case "count": {
      return { ...state, count: action.payload };
    }
    default: {
      return state;
    }
  }
};
const IceCream = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{`cakecount - ${state.cakeCount} iceCount - ${state.iceCount}`}</h2>
      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "count", payload: parseInt(e.target.value) })
        }
      />
      <button
        onClick={() => dispatch({ type: "orderIce", payload: state.count })}>
        order
      </button>
    </div>
  );
};

export default IceCream;
