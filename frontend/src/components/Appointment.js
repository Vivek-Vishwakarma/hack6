import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
const theme = createTheme();

export default function Appointment() {
  //   const history = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    docName: "",
    time: "",
    date: "",
  });

  const postUser = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:5000/data", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Typography id="appointment" className="heading" variant="h4">
        Book Appointment
      </Typography>
      <ThemeProvider theme={theme}>
        <Container className="div" component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" onSubmit={postUser} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="off"
                    name="name"
                    required
                    fullWidth
                    onChange={handleChange}
                    id="firstName"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    onChange={handleChange}
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    onChange={handleChange}
                    label="Phone Number"
                    name="phone"
                    type="number"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    onChange={handleChange}
                    label="Address"
                    name="address"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">
                      Doctor Name *
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={user.docName}
                      fullWidth
                      name="docName"
                      label="Doctor Name *"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>Doctor Name *</em>
                      </MenuItem>
                      <MenuItem value="Vivek Vishwakarma`vivek_vishwakarma2002@outlook.com">
                        Vivek Vishwakarma
                      </MenuItem>
                      <MenuItem value="Anshu Bahgat`anshubhagat66@gmail.com">Anshu Bahgat</MenuItem>
                      <MenuItem value="Hitesh Gupta`hiteshtcet2019@gmail.com">Hitesh Gupta</MenuItem>
                      <MenuItem value="Vikas Gond`vikasgond807@gmail.com">Vikas Gond</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="time"
                    onChange={handleChange}
                    name="date"
                    type="date"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="time"
                    onChange={handleChange}
                    name="time"
                    type="time"
                    autoComplete="off"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                onSubmit={postUser}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Book Appointment
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
