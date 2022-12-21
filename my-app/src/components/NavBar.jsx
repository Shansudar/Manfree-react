import React from "react";
import { Link } from "react-router-dom";

const routes = ["home", "contact", "about", "products"];
const NavBar = () => {
  return (
    <nav>
      {routes.map((item) => (
        <Link key={item} className={`${item}`} to={`/${item}`}>
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
