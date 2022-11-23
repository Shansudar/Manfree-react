import React, { useEffect, useState } from "react";
const fetcher = () => {
  console.log("logging");
  return () => {
    console.log("unmounting");
  };
};
const LifeCycle = () => {
  const [count, setCount] = useState(10);
  useEffect(fetcher, [count]);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default LifeCycle;
