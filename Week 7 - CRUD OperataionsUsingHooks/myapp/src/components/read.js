import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { API_URL } from "../Constants/URL";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Read = () => {
  const [apiData, setApiData] = React.useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const callGetAPI = async () => {
    const response = axios.get(API_URL);
    const data = await response;
    console.log(data.data);
    setApiData(data.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(API_URL + "/" + id);
    setTimeout(() => callGetAPI(), 0);
  };

  const handleUpdate = (item) => {
    navigate(
      `/update?id=${item.id}&firstName=${item.firstName}&lastName=${item.lastName}`
    );
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table style={{ color: "black" }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>First Name</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Last Name</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>{" "}
          {/* Add Actions header */}
        </TableRow>
      </TableHead>
      <TableBody>
        {apiData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                onClick={() => handleDelete(item.id)}
                style={{ marginRight: "10px" }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUpdate(item)}
              >
                {" "}
                {/* Add Update button */}
                Update
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Read;
