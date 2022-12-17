import React from "react";
import Child from "./Child";

const Parent = ({ name }) => {
  console.log("parent");
  return (
    <div>
      <h4>Parent- {name}</h4>
      <Child name={name} />
    </div>
  );
};

export default Parent;
