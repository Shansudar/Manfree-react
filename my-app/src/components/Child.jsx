import React from "react";

const Child = ({ person }) => {
  //   console.log(props);
  return (
    <div>
      <h1>
        welcome {person.name} -{person.course}-{person.count}
      </h1>
    </div>
  );
};

export default Child;
