import React from "react";

const GrandChild = ({ name }) => {
  console.log("grand child");
  return <h4>GrandChild-{name}</h4>;
};

export default GrandChild;
