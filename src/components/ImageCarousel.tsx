import Carousel from "react-bootstrap/Carousel";
import React from "react";

import img1 from "../assets/first.jpg?as=webp";
import img2 from "../assets/second.jpg?as=webp";
import img3 from "../assets/third.jpg?as=webp";

export default function ControlledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{ height: "100vh" }} className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: "100vh" }} className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: "100vh" }} className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
