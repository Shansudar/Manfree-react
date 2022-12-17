import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  console.log("child");
  return (
    <div>
      <h4>Child </h4>
      <GrandChild />
    </div>
  );
};

export default Child;
