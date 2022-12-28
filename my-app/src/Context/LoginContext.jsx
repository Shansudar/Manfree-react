import React, { createContext, useContext, useEffect, useState } from "react";

const loginContext = createContext(null);
const initialState = { name: "", isLogged: false };
const LoginContext = ({ children }) => {
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const login = (name) => {
    setUser({ name, isLogged: true });
  };
  const logout = () => {
    setUser(initialState);
  };
  return (
    <loginContext.Provider value={{ user, login, logout }}>
      {children}
    </loginContext.Provider>
  );
};

export default LoginContext;

export const useAuth = () => useContext(loginContext);
