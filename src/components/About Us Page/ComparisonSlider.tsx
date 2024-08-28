import { ImgComparisonSlider } from "@img-comparison-slider/react";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import React, { useRef } from "react";
import Slider from "react-slick";

import bed from "../../assets/About Us Page Images/comparison slider img/bed.jpg?as=webp";
import graySofa from "../../assets/About Us Page Images/comparison slider img/biege_sofa.jpg?as=webp";
import cafeTable from "../../assets/About Us Page Images/comparison slider img/cafe_table.jpg?as=webp";
import coffeeTable from "../../assets/About Us Page Images/comparison slider img/coffee_table.jpg?as=webp";
import blackChair from "../../assets/About Us Page Images/comparison slider img/gray_chair.jpg?as=webp";
import biegeSofa from "../../assets/About Us Page Images/comparison slider img/grey_sofa.jpg?as=webp";
import redChair from "../../assets/About Us Page Images/comparison slider img/red_chair.jpg?as=webp";
import smallBesideTable from "../../assets/About Us Page Images/comparison slider img/small_beside_table.jpg?as=webp";
import storageBed from "../../assets/About Us Page Images/comparison slider img/storage_bed.jpg?as=webp";
import tallBEsideTable from "../../assets/About Us Page Images/comparison slider img/tall_beside_table.jpg?as=webp";
import * as styles from "../../styles/about us styles/comparison_slider.module.css";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "./SvgIcons";

export default function ComparisonSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    className: "center",
    draggable: false,
    focusOnSelect: true,
    infinite: true,
    initialSlide: 1,
    slidesToScroll: 3,
    slidesToShow: 3,
    speed: 300,
    swipe: false,
    swipeToSlide: false,
  };

  const images = [
    { first: graySofa, second: biegeSofa },
    { first: blackChair, second: redChair },
    { first: smallBesideTable, second: tallBEsideTable },
    { first: bed, second: storageBed },
    { first: cafeTable, second: coffeeTable },
  ];

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div className={styles.header_container}>
        <h2 className={styles.header}>Your style, your choices, your space</h2>
        <p className={styles.des}>Create a space that reflects your individuality. Loxavi is furniture designed especially for you.</p>
      </div>

      <div className={styles.slider_control_panel}>
        <NavigateBeforeOutlinedIcon onClick={prevSlide} />
        {icons.map((IconComponent, index) => (
          <div
            className={styles.nav_icon}
            key={index}
            onClick={() => {
              goToSlide(index);
            }}
          >
            <IconComponent />
          </div>
        ))}
        <NavigateNextRoundedIcon onClick={nextSlide} />
      </div>

      <div className={styles.comparison_slider}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((imagePair, index) => (
            <div
              className={styles.slider_item}
              key={index}
              onMouseDown={(event) => {
                if (event.button === 2) event.stopPropagation();
              }}
            >
              <ImgComparisonSlider>
                <img className={styles.image} slot="first" src={imagePair.first} />
                <img className={styles.image} slot="second" src={imagePair.second} />
              </ImgComparisonSlider>
              <div className={styles.overlay_text}>Drag to explore, click to move</div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
