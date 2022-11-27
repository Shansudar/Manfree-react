import React from "react";

const Child = ({ person }) => {
  console.log("child is rendering");
  return <div>Child-{person.name}</div>;
};

export default React.memo(Child);
// export default Child;
