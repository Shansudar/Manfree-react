import React from "react";
const isLogin = true;

// method 1

export const TypeOne = () => {
  if (isLogin) {
    //   log-in true
    return <h2>welcome manfree</h2>;
  } else {
    // login-false
    return <h2> you are not logged in</h2>;
  }
};

// method 2

export const TypeTwo = () => {
  return (
    <div>
      {isLogin ? <h2>welcome manfree</h2> : <h2>you are not logged in</h2>}
    </div>
  );
};

// method 3

export const TypeThree = () => {
  return (
    <div>
      <h2>{isLogin && <h2>welcome manfree</h2>}</h2>
      <h2>nothing</h2>
    </div>
  );
};
