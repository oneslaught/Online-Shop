import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

import Bathroom from "../../assets/Home Page Images/slider img/bathroom.jpg?as=webp";
import Bedroom from "../../assets/Home Page Images/slider img/bedroom.jpg?as=webp";
import Dining from "../../assets/Home Page Images/slider img/kitchen.jpg?as=webp";
import Living from "../../assets/Home Page Images/slider img/living_room.jpg?as=webp";
import Office from "../../assets/Home Page Images/slider img/office.jpeg?as=webp";
import Outdoor from "../../assets/Home Page Images/slider img/outdoor.jpg?as=webp";
import * as styles from "../../styles/home styles/slider.module.css";

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
  const [disableButtons, setDisableButtons] = useState<boolean>(false);

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
    setDisableButtons(true);
    setTimeout(() => {
      setDisableButtons(false);
    }, 820);

    setRender(render + 1);
    setSlides((prevSlides) => {
      return [...prevSlides.slice(1), prevSlides[0]!];
    });
  };

  const handlePrev = () => {
    setDisableButtons(true);
    setTimeout(() => {
      setDisableButtons(false);
    }, 820);

    setRender(render - 1);
    setSlides((prevSlides) => {
      return [prevSlides[prevSlides.length - 1]!, ...prevSlides.slice(0, -1)];
    });
  };

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.progress_bar} key={render}></Box>
        <Box className={styles.slide}>
          {slides.map((slide, idx) => (
            <Box className={styles.item} key={render + idx} style={{ backgroundImage: `url(${slide.image})` }}>
              <Box className={styles.content}>
                <Box className={styles.name}>{slide.name}</Box>
                <Box className={styles.des}>{slide.description}</Box>
                <button>See more</button>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={styles.button}>
          <button className={disableButtons ? styles.disabled : ""} disabled={disableButtons} onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button className={disableButtons ? styles.disabled : ""} disabled={disableButtons} onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </Box>
      </Box>
    </>
  );
}
