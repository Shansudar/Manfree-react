import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const { data, loading, err } = useSelector((state) => state.user);

  if (err) {
    return <h2>Error Happens</h2>;
  }
  if (loading) {
    return <h1>Loading Data...</h1>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <nav>{item.name}</nav>
          <button onClick={() => dispatch(deleteUser(item.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserView;
