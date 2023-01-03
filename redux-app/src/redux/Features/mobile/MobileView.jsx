import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderMobile } from "./mobileSlice";

const MobileView = () => {
  const { count } = useSelector((state) => state.mobile);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const handleOrder = () => {
    dispatch(orderMobile(num));
  };
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <h2>Mobile - {count}</h2>
      <button onClick={handleOrder}>order Tv</button>
    </div>
  );
};

export default MobileView;
