import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from '../utils/auth';

function Login() {
  const [username, setUserName] = useState("");
  const [role, setRole] = useState("user");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        role,
      });
      setToken(res.data.token);
      alert("Login successful!");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
