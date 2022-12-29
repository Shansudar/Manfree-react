import React from "react";
import { Link, NavLink } from "react-router-dom";

const routes = [
  "home",
  "contact",
  "about",
  "products",
  "users",
  "login",
  "profile",
  "child",
];
const NavBar = () => {
  return (
    <nav className="navbar-container">
      {routes.map((item) => (
        <NavLink key={item} className={`${item}`} to={`/${item}`}>
          {item}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
