import React from "react";

const Child = ({ handler }) => {
  // console.log(props);
  return (
    <div>
      <h1>
        <button onClick={handler}>Click</button>
      </h1>
    </div>
  );
};

export default Child;
