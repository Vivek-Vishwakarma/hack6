import { Box, Button, Container, Typography } from "@mui/material";
import "../App.css";
import side from "../images/car1.jpg";
const Header = () => {
  return (
    <Container
      className="container"
      maxWidth="lg"
      sx={{ display: "flex", mt: "40px", justifyContent: "space-evenly" }}
    >
      <Box component="div" sx={{margin: "10px 20px", width:"450px"}}>
        <Typography className="heading" style={{textAlign: "left"}} variant="h4">Reverse Your Diabetes</Typography>
        <Typography variant="subtitle1" mt={2}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          labore ratione, magnam fugit repellendus temporibus dolor ducimus,
          doloremque laborum pariatur corrupti repellat. Modi sequi eaque non
          doloremque quisquam, iure perspiciatis reprehenderit recusandae,
          labore distinctio deserunt!
        </Typography>
        <br />
        <Button variant="contained" color="success">
          Get Started &#8594;
        </Button>
      </Box>
      <Box mt={2} component="div">
        <img
          style={{ height: "250px", maxWidth: "350px" }}
          src={side}
          alt="side"
        />
      </Box>
    </Container>
  );
};

export default Header;
