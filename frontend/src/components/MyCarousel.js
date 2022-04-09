import React from "react";
import { Carousel } from "react-bootstrap";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import "../App.css";
const MyCarousel = () => {
  return (
    <Carousel className="carContainer">
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carh2">Second slide label</h3>
          <p className="carp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="carh2">Second slide label</h3>
          <p className="carp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="carh2">Second slide label</h3>
          <p className="carp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
