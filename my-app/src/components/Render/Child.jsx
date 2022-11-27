import React from "react";

const Child = ({ dummy }) => {
  console.log("child is rendering");
  return (
    <div>
      <button onClick={dummy}>child</button>
    </div>
  );
};

export default React.memo(Child);
// export default Child;
