import React, { useMemo, useState } from "react";
import Child from "./Child";
import Second from "./Second";
const intitail = { name: "manfree", age: 21 };
const Parent = () => {
  const [person, setPerson] = useState(intitail);
  console.log("parent is rendering");
  const another = useMemo(() => ({ name: "men" }), []);
  return (
    <div>
      <div>Parent-{person.name}</div>
      <button onClick={() => setPerson({ name: "cbe", age: 100 })}>name</button>

      <Child person={person.name} />
      <Second men={another} />
    </div>
  );
};

export default Parent;
