import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Container = ({ children }) => {
  const { user } = useAuth();
  if (user.isLogged) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default Container;
