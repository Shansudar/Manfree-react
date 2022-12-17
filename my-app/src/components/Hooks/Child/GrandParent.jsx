import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  console.log("grand parent");
  return (
    <div>
      <h4>GrandParent </h4>
      <Parent />
    </div>
  );
};

export default GrandParent;
