import React from "react";
import Parent from "./Parent";

const GrandParent = ({ name }) => {
  console.log("grand parent");
  return (
    <div>
      <h4>GrandParent -{name}</h4>
      <Parent name={name} />
    </div>
  );
};

export default GrandParent;
