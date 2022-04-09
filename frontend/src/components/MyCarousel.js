import React from "react";
import { Carousel } from "react-bootstrap";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import "../App.css";
const MyCarousel = () => {
  return (
    <Carousel id="carousel" className="carContainer">
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carh2">Expert Doctors</h3>
          <p className="carp">
            Book doctor appointment with expert in there filed
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="carh2">For All Health Problems</h3>
          <p className="carp">Book the doctor appointment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carImage" src={car3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="carh2">Talk to Doctors online</h3>
          <p className="carp">Video/Audio calls & and Chat</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
