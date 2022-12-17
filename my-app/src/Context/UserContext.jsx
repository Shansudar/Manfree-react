import React, { createContext, useState } from "react";
export const ContextValue = createContext(null);
const UserContext = ({ children }) => {
  const [name, setName] = useState("manfree");
  const handleChange = (text) => {
    // console.log(text);
    setName("chennai");
  };
  console.log("name is logging", name);
  return (
    <ContextValue.Provider value={{ name, handleChange }}>
      {children}
    </ContextValue.Provider>
  );
};

export default UserContext;
