import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import side from "../images/doc1.jpg";
import "../App.css";
import { Link } from "react-scroll/modules";
const Header = () => {
  return (
    <Container
      id="header"
      className="container"
      sx={{ display: "flex", mt: "40px", justifyContent: "space-evenly" }}
    >
      <Box component="div" sx={{ margin: "auto 20px", width: "450px" }}>
        <article>
          <header>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "1.6rem",
                fontWeight: "bold",
              }}
            >
              Health Buddy .
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", fontSize: "1.3rem" }}>
              Close to you. ... Close to you. ...
            </Typography>
          </header>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              maxWidth: "350px",
              fontSize: "1.3rem",
            }}
          >
            Smart way to book your doctor consultant. No need to stay in queue{" "}
            <br />
            <br />
            <Link to="appointment" spy={true} offset={-180}>
              <Button variant="contained" color="success">
                Get Started &#8594;
              </Button>
            </Link>
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
