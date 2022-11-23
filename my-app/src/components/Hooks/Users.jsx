import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const fetcher = () => {
    const response = axios.get("https://jsonplaceholder.typicode.com/posts");
    response.then((result) => {
        console.log(result.data);
        setUsers(result.data);
    });
  };
  useEffect(fetcher, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
