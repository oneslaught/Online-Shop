import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useEffect, useState } from "react";

import Bathroom from "../assets/bathroom.jpg?as=webp";
import Bedroom from "../assets/bedroom.jpg?as=webp";
import Dining from "../assets/kitchen.jpg?as=webp";
import Living from "../assets/living_room.jpg?as=webp";
import Office from "../assets/office.jpeg?as=webp";
import Outdoor from "../assets/outdoor.jpg?as=webp";
import * as styles from "../styles/slider.module.css";

type Slide = {
  description: string;
  image: string;
  name: string;
};

const slidesData: Slide[] = [
  { description: "Create a cozy place to relax outdoors with our outdoor furniture.", image: Outdoor, name: "Outdoor" },
  { description: "Transform your dining room into the perfect place for family lunches and dinners", image: Dining, name: "Dining" },
  { description: "Enjoy comfort and style in your living room with our furniture and decor.", image: Living, name: "Living" },
  { description: "Ensure a restful and comfortable sleep in an elegant and cozy bedroom.", image: Bedroom, name: "Bedroom" },
  { description: "Create a productive and inspiring workspace at your home or office.", image: Office, name: "Office" },
  { description: "Enjoy modern and unique design in your bathroom.", image: Bathroom, name: "Bathroom" },
];

export default function NewSlider() {
  const [slides, setSlides] = useState<Slide[]>(slidesData);
  const [render, setRender] = useState<number>(0);

  useEffect(() => {
    const handleNextAuto = setTimeout(() => {
      handleNext();
    }, 7000);

    return () => {
      clearTimeout(handleNextAuto);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  const handleNext = () => {
    setRender(render + 1);
    setSlides((prevSlides) => {
      return [...prevSlides.slice(1), prevSlides[0]!];
    });
  };

  const handlePrev = () => {
    setRender(render - 1);
    setSlides((prevSlides) => {
      return [prevSlides[prevSlides.length - 1]!, ...prevSlides.slice(0, -1)];
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.progress_bar} key={render}></div>
        <div className={styles.slide}>
          {slides.map((slide, idx) => (
            <div className={styles.item} key={render + idx} style={{ backgroundImage: `url(${slide.image})` }}>
              <div className={styles.content}>
                <div className={styles.name}>{slide.name}</div>
                <div className={styles.des}>{slide.description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.button}>
          <button onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
}
