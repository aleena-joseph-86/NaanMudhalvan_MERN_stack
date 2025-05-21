import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AddPerson from "./components/AddPerson";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px" }}>
        <Link to="/">Login</Link> | <Link to="/profile">Profile</Link> |
        <Link to="/add-person">Add Person</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-person" element={<AddPerson />} />
      </Routes>
    </Router>
  );
}

export default App;
