import React from "react";
import GrandParent from "./Child/GrandParent";

const Company = ({ name }) => {
  return (
    <div>
      <GrandParent name={name} />
     
    </div>
  );
};

export default Company;
