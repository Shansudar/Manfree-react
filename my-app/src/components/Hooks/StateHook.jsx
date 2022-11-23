import React, { useState } from "react";

const StateHook = () => {
  const start = 10;
  console.log("component is rendering");
  const [count, setCount] = useState(start);
  // const handleInr = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}> Click</button>
      <button onClick={() => setCount(start)}>Reset</button>
    </div>
  );
};

export default StateHook;
