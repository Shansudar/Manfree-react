import React from "react";

const Welcome = () => {
  const name = "sudharasan";
  const number1 = 90;
  const number2 = 100;
  return (
    <div>
      <h2>Welcome {name}</h2>
      <h1>{number1 + number2}</h1>
    </div>
  );
};

export default Welcome;
