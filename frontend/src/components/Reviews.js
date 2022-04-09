import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Container } from "@mui/material";
import r1 from "../images/r1.png"
import r2 from "../images/r2.png"
import r3 from "../images/r3.png"

export default function Reviews() {
  return (
    <>
      <Typography className="heading" variant="h4">
        Reviews
      </Typography>
      <Container className="reviews">
        <Card sx={{ maxWidth: 300, margin: "20px 40px" }}>
          <CardMedia
            component="img"
            height="230"
            image={r1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300, margin: "20px 40px" }}>
          <CardMedia
            component="img"
            height="230"
            image={r2}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 300, margin: "20px 40px" }}>
          <CardMedia
            component="img"
            height="230"
            image={r3}
            alt="green iguana"
          />
          <CardContent>
            <Typography sx={{textAlign : "center"}} gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
