import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ name }) => {
  console.log("child");
  return (
    <div>
      <h4>Child - {name}</h4>
      <GrandChild name={name} />
    </div>
  );
};

export default Child;
