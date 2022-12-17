import React from "react";
import { useContext } from "react";
import { ContextValue } from "../../../Context/UserContext";

const GrandChild = () => {
  const { name } = useContext(ContextValue);
  return <h4>GrandChild-{name}</h4>;
};

export default GrandChild;
