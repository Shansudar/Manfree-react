import React, { useEffect, useState } from "react";

const initialState = {
  name: "ragnar",
  role: "king",
};

const Example = () => {
  const [person, setPerson] = useState(initialState);
  useEffect(() => {
    console.log("working");

    return () => {
      console.log("inner Function");
    };
  }, [person,]);
  const keys = Object.keys(person);
  const handleClick = () => {
    const another = { ...person, age: 21 };

    setPerson(another);
    // console.log(person);
  };
  return (
    <div>
      <div>
        <ul>
          {keys.map((item, index) => (
            <li key={index}>
              {item}-{person[item]}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
};

export default Example;
