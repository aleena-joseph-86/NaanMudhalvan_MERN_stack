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

const Read = () => {
  const [apiData, setApiData] = React.useState([]);

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

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table style={{ color: "black" }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>First Name</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Last Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {apiData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.firstName}</TableCell>
            <TableCell>{item.lastName}</TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => handleDelete(item.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Read;
