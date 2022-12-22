import React from "react";
import { Link, Outlet } from "react-router-dom";
const things = ["mobile", "tv", "smartwatch", "bike"];
const Products = () => {
  return (
    <div>
      <h2>Products Page</h2>
      <ul>
        {things.map((item) => (
          <Link key={item} to={item}>
            {item}
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
