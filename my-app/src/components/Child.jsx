import React from "react";

const Child = ({ handler }) => {
  // console.log(props);
  return (
    // react fragment
    <>
      <h1>
        <button onClick={handler}>Click</button>
      </h1>
    </>
  );
};

export default Child;
