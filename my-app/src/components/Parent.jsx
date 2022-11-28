import React, { useState } from "react";
import john from "./one.jpg";
const Parent = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">name</label>
        <input type="text" /> <br />
        <label htmlFor="">age</label>
        <input type="text" />
        <br />
        <label htmlFor="">course</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Parent;
