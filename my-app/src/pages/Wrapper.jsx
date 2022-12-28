import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Wrapper = ({ children }) => {
  const navi = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (!user.isLogged) {
      navi("/login");
    }
  }, []);
  return <>{children}</>;
};

export default Wrapper;


