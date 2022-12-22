import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { name } = useParams();
  return <h1>Showing {name}'s page</h1>;
};

export default SingleProduct;
