import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import Second from "./Second";
const intitail = { name: "manfree", age: 21 };
const Parent = () => {
  const [person, setPerson] = useState(intitail);
  console.log("parent is rendering");

  const handleClick = useCallback(() => {
    setPerson({ name: "madurai", age: 10 });
  }, []);

  const dummy = useCallback(() => {}, []);
  return (
    <div>
      <div>Parent-{person.name}</div>
      <button onClick={() => setPerson({ name: "cbe", age: 100 })}>name</button>

      <Child handler={dummy} />
      <Second handler={handleClick} />
    </div>
  );
};

export default Parent;
