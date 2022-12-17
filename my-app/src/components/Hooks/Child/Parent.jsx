import React from "react";
import Child from "./Child";

const Parent = () => {
  console.log("parent");
  return (
    <div>
      <h4>Parent</h4>
      <Child />
    </div>
  );
};

export default Parent;
