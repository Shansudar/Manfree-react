import React, { useState } from "react";

const Mutation = () => {
  const [names, setNames] = useState(["abi", "boobalan", "sudharsan"]);
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => {
    const isPresent = names.find((item) => item === value);
    if (isPresent) {
        setShow(true);
        setValue("")
    }
    else {
      setNames([...names, value]);
      console.log(names);
      setValue("");
    }
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
      <div>{show && <h4>userName already taken</h4>}</div>
    </div>
  );
};

export default Mutation;
