import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/first.jpg?as=webp";
import img2 from "../assets/second.jpg?as=webp";
import img3 from "../assets/third.jpg?as=webp";

export default function ControlledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img alt="First slide" className="d-block w-100" src={img1} style={{ height: "90vh" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Second slide" className="d-block w-100" src={img2} style={{ height: "90vh" }} />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Third slide" className="d-block w-100" src={img3} style={{ height: "90vh" }} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
