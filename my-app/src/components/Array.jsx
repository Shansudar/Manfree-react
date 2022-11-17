import React from "react";
export const Array = () => {
  const names = ["abi", "boobalan", "gokila", "sudharsan"];
  return (
    <div>
      {/* using map function to return h2 tag */}
      {names.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

// conditional rendering

export const User = () => {
  const isLogin = true;

  if (isLogin) {
    return <h2>welcome user</h2>;
  } else {
    return <h2>you are not logged in</h2>;
  }
};
