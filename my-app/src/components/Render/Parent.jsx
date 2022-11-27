import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [name, setName] = useState("floki");
  console.log("parent is rendering");
  return (
    <div>
      <div>Parent-{name}</div>
      <button onClick={() => setName("manfree")}>Click</button>
      <Child />
    </div>
  );
};

export default Parent;
