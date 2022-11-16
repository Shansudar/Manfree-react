import React from "react";
import Child from "./Child";

const Parent = () => {
  const handler = () => {
    console.log("handler is working");
  };
  return (
    <div>
      <h3>welcome to manfree</h3>
      <Child handler={handler} />
    </div>
  );
};
export default Parent;
