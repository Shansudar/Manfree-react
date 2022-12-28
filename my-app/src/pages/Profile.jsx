import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navi = useNavigate();
  const handleLogout = () => {
    logout();
    navi("/home");
  };
  return (
    <div>
      <h2>{`welcome ${user.name}`}</h2>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Profile;
