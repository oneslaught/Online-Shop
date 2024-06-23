import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { Component } from "react";

import Bathroom from "../assets/bathroom.jpg?as=webp";
import Bedroom from "../assets/bedroom.jpg?as=webp";
import Dining from "../assets/kitchen.jpeg?as=webp";
import Living from "../assets/living_room.jpg?as=webp";
import Office from "../assets/office.jpeg?as=webp";
import Outdoor from "../assets/outdoor.jpg?as=webp";
import * as styles from "../styles/new_slider.module.css";

type Slide = {
  description: string;
  image: string;
  name: string;
};

type State = {
  slides: Slide[];
};

class NewSlider extends Component<object, State> {
  handleNext = () => {
    this.setState((prevState) => {
      const newSlides: Slide[] = [...prevState.slides.slice(1), prevState.slides[0]!];
      return { slides: newSlides };
    });
  };

  handlePrev = () => {
    this.setState((prevState) => {
      const lastSlide = prevState.slides[prevState.slides.length - 1];
      const restSlides = prevState.slides.slice(0, -1);
      const newSlides: Slide[] = [lastSlide!, ...restSlides];
      return { slides: newSlides };
    });
  };

  constructor(props: object) {
    super(props);
    this.state = {
      slides: [
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Outdoor, name: "Outdoor" },
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Dining, name: "Dining" },
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Living, name: "Living" },
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Bedroom, name: "Bedroom" },
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Office, name: "Office" },
        { description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, officiis.", image: Bathroom, name: "Bathroom" },
      ],
    };
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.slide}>
            {this.state.slides.map((slide) => (
              <div className={styles.item} key={slide.name} style={{ backgroundImage: `url(${slide.image})` }}>
                <div className={styles.content}>
                  <div className={styles.name}>{slide.name}</div>
                  <div className={styles.des}>{slide.description}</div>
                  <button>See more</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <button onClick={this.handlePrev}>
              <ArrowBackIcon />
            </button>
            <button onClick={this.handleNext}>
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default NewSlider;
