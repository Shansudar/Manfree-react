import React from "react";
import { useReducer } from "react";
const initialState = {
  carCount: 10,
  bikeCount: 20,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "orderCar": {
      return { ...state, carCount: state.carCount - action.payload };
    }
    case "orderBike": {
      return { ...state, bikeCount: state.bikeCount - action.payload };
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
      <button onClick={() => dispatch({ type: "orderCar", payload: 1 })}>
        Order Car
      </button>
      <button onClick={() => dispatch({ type: "orderBike", payload: 1 })}>
        Order Bike
      </button>
      <button onClick={() => dispatch({ type: "orderCar", payload: 5 })}>
        Order Car-5
      </button>
      <button onClick={() => dispatch({ type: "orderBike", payload: 5 })}>
        Order Bike-5
      </button>
    </div>
  );
};

export default Shop;
