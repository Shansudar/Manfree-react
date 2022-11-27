import React from "react";

const Second = ({ handler }) => {
  console.log("second component");
  return (
    <div>
      <button onClick={handler}>Click</button>
    </div>
  );
};

export default React.memo(Second);
