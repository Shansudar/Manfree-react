import React from "react";

const Child = () => {
  console.log("child is rendering");
  return <div>Child</div>;
};

export default React.memo(Child);
// export default Child;
