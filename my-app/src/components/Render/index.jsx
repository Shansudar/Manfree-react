import React from "react";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  console.log("component is rendering");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(0)}>zero</button>
      <button onClick={() => setCount(5)}>five</button>
    </div>
  );
};

export default Index;
