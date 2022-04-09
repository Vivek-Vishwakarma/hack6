import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Admin = () => {
  const history = useNavigate();
  const [data, setData] = useState();
  const pass = prompt("Please Enter the password to login ?");
  const getData = () => {
    axios
      .get("http://localhost:5000/data/admin")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(pass);
    const ipass = "12345678";
    if (pass === ipass) {
      getData();
    } else {
      alert("wrong passowrd");
      history("/");
    }
  }, []);
  return (
    <>
      <Link
        to="/"
        style={{ textDecoration: "none", display : "flex", justifyContent : "center" }}
      >
        <Button
          sx={{ my: 2, display: "block" }}
          variant="contained"
          color="error"
        >
          Go Back
        </Button>
      </Link>
      <TableContainer id="admin" component={Paper}>
        <Table
          sx={{ maxWidth: 1400, minWidth: 900 }}
          className="table"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Doctor Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="right">Date/Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.docName}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="right">
                    {row.createdAt.split("T")[0]} / {row.time}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Admin;
