import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [person, setPerson] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setPerson(data);
    };
    fetcher();
  }, []);
  return (
    <div>
      <h2>{person.name}</h2>
      <h4>{person.email}</h4>
    </div>
  );
};

export default User;





