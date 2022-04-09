import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import side from "../images/doc1.jpg";
import "../App.css";
const Header = () => {
  return (
    <Container
      className="container"
      sx={{ display: "flex", mt: "40px", justifyContent: "space-evenly" }}
    >
      <Box component="div" sx={{ margin: "auto 20px", width: "450px" }}>
        <article>
          <header>
            <h2 sx={{ fontFamily: "Montserrat" }}>Health Buddy</h2>
            <span sx={{ fontFamily: "Montserrat" }} class="byline">
              by The Innovators
            </span>
          </header>
          <Typography sx={{ fontFamily: "Montserrat", maxWidth: "350px" }}>
            Smart way to book your doctor consultant. No need to stay in queue{" "}
            <br />
            <br />
            <Button variant="contained" color="success">
              Get Started &#8594;
            </Button>
          </Typography>
        </article>
      </Box>
      <Box mt={2} component="div">
        <img
          className="header-img"
          style={{ height: "350px", width: "450px" }}
          src={side}
          alt="side"
        />
      </Box>
    </Container>
  );
};

export default Header;
