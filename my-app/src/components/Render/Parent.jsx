import React, { useState } from "react";
import Child from "./Child";
const person = { name: "manfree" };
const Parent = () => {
  const [name, setName] = useState(person);
  const [age, setAge] = useState("23");
  console.log("parent is rendering");
  return (
    <div>
      <div>Parent-{name.name}</div>
      <button onClick={() => setAge(100)}>age</button>
      <button onClick={() => setName({ name: "cbe" })}>name</button>
      <Child person={name} />
    </div>
  );
};

export default Parent;
