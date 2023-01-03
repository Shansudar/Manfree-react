import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderTv } from "./tvSlice";

const TvView = () => {
  const { count } = useSelector((state) => state.tele);
  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(orderTv());
  };
  return (
    <div>
      <h2>Tele - {count}</h2>
      <button onClick={handleOrder}>order Tv</button>
    </div>
  );
};

export default TvView;
