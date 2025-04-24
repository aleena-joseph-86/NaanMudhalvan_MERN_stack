import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const navigate = useNavigate();

  const formData = async () => {
    console.log(firstName, lastName);
    await axios.post(API_URL, {
      firstName,
      lastName,
    });
    navigate("/read");
  };

  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1 style={{ color: "black" }}>Create</h1>
        <TextField
          style={{ margin: "10px" }}
          label="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          style={{ margin: "10px" }}
          label="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
          onClick={formData}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Create;
