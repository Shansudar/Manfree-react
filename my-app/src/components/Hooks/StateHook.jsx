import React, { useState } from "react";

const StateHook = () => {
  console.log("component is rendering");
  const [count, setCount] = useState(0);
  const handleInr = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleInr}>Click</button>
    </div>
  );
};

export default StateHook;
