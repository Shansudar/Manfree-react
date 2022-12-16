import React from "react";
import { useReducer } from "react";
const initialState = {
  carCount: 10,
  bikeCount: 20,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "orderCar": {
      return { ...state, carCount: state.carCount - 1 };
    }
    case "orderBike": {
      return { ...state, bikeCount: state.bikeCount - 1 };
    }
    default: {
      return state;
    }
  }
};
const Shop = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>{`car count - ${state.carCount}   bike count -${state.bikeCount}`}</h3>
      <button onClick={() => dispatch({ type: "orderCar" })}>Order Car</button>
      <button onClick={() => dispatch({ type: "orderBike" })}>
        Order Bike
      </button>
    </div>
  );
};

export default Shop;
