import React, { useState } from "react";

const Mutation = () => {
  const [names, setNames] = useState(["abi", "boobalan", "sudharsan"]);
  const handleClick = () => {
    names.push("manfree");
    console.log(names);
  };
  return (
    <div>
      {names.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Mutation;
