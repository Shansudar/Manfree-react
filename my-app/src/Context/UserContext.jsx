import React, { createContext, useContext, useState } from "react";
export const ContextValue = createContext(null);
const UserContext = ({ children }) => {
  const [name, setName] = useState("manfree");
  const handleChange = (text) => {
    setName("chennai");
  };
  // console.log("name is logging", name);
  return (
    <ContextValue.Provider value={{ name, handleChange }}>
      {children}
    </ContextValue.Provider>
  );
};
export default UserContext;

export const useAuth = () => useContext(UserContext);
