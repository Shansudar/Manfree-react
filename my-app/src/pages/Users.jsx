import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Users = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  return (
    <div className="user-container">
      <div>
        {" "}
        {list.map((item) => (
          <Link key={item.id} to={`/user/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
