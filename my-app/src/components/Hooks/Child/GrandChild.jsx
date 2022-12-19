import React from "react";

import { useAuth } from "../../../Context/UserContext";

const GrandChild = () => {
  const { name } = useAuth();
  return <h4>GrandChild-{name}</h4>;
};

export default GrandChild;
