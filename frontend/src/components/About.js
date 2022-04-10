import { Box, Container, Typography } from "@mui/material";
import "../App.css";
import React from "react"
import side from "../images/car1.jpg";
const About = () => {
  return (
    <>
    <Typography className="heading" variant="h4">About</Typography>
    <Container
      className="container"
      maxWidth="xl"
      id="about"
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Box component="div" sx={{margin: "10px 20px", width:"450px"}}>
        <Typography variant="subtitle1" mt={2} sx={{fontSize : "1.1rem"}}>
          Simple to use and easy to understand, immediately book an appointment according to your schedule and need.
          We have also integrated mailing system for both patient and doctors. Available in both offline as well as online mode. Simple and responsive UI. Wide range of well trained and experienced doctors are available.
        </Typography>
      </Box>
      <Box mt={2} component="div">
        <img
          style={{ height: "250px", maxWidth: "350px" }}
          src={side}
          alt="side"
        />
      </Box>
    </Container>
    </>
  );
};

export default About;
