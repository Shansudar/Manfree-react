import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/LoginContext";

const Login = () => {
  const [name, setName] = useState("");
  const navigator = useNavigate();
  const { login } = useAuth();
  const handleLogin = () => {
    login(name);
    setName("");
    navigator("/profile");
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
