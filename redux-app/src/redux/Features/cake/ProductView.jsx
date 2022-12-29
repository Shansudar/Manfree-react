import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake } from "./productSlice";
const ProductView = () => {
  const { cake, ice } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleCake = () => {
    dispatch(orderCake());
  };
  return (
    <div>
      <div>
        <h2> Cake Count -{cake}</h2>
        <h2> Ice Count -{ice}</h2>
      </div>
      <button onClick={handleCake}>OrderCake</button>
    </div>
  );
};

export default ProductView;

// const orderCake = () => {
//   return { type: "orderCake", payload: 10 };
// };
