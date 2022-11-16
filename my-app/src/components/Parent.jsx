import React from "react";
import Child from "./Child";

const Parent = () => {
  const person = {
    name: "madurai",
    count: 10,
    course: "java",
  };
  return (
    <div>
      <h3>welcome to manfree</h3>;
      <Child person={person} /> 
    </div>
  );
};
export default Parent;
