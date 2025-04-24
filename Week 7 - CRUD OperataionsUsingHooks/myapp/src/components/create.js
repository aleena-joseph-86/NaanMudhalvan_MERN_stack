import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useState } from "react";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const formData = () => {
    console.log(firstName, lastName);
  }
  return (
    <div>
      <Box>
        <TextField label="firstname" value={firstName}  />
        <TextField label="lastname" value={lastName} />
        <Button onClick={formData}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Create;
