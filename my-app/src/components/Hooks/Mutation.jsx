import React, { useState } from "react";

const Mutation = () => {
  const [names, setNames] = useState(["abi", "boobalan", "sudharsan"]);
  const [value, setValue] = useState("");
  const handleClick = () => {
    // names.push("manfree");
    setNames([...names, value]);
    console.log(names);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      {names.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Mutation;
