import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { API_URL } from "../Constants/URL";
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setId(searchParams.get("id"));
    setFirstName(searchParams.get("firstName"));
    setLastName(searchParams.get("lastName"));
  }, [location.search]);

  const handleUpdate = async () => {
    if (!id) {
      console.error("No ID found for update");
      return;
    }
    try {
      await axios.put(`${API_URL}/${id}`, {
        firstName,
        lastName,
      });
      navigate("/read");
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1 style={{ color: "black" }}>Update</h1>
      <TextField
        style={{ margin: "10px" }}
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        style={{ margin: "10px" }}
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
        onClick={handleUpdate}
      >
        Update
      </Button>
    </Box>
  );
};

export default Update;
