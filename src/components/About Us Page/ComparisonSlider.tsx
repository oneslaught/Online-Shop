import { ImgComparisonSlider } from "@img-comparison-slider/react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import DeskOutlinedIcon from "@mui/icons-material/DeskOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import bed from "../../assets/About Us Page Images/comparison slider img/bed.jpg?as=webp";
import graySofa from "../../assets/About Us Page Images/comparison slider img/biege_sofa.jpg?as=webp";
import cafeTable from "../../assets/About Us Page Images/comparison slider img/cafe_table.jpg?as=webp";
import coffeeTable from "../../assets/About Us Page Images/comparison slider img/coffee_table.jpg?as=webp";
import desk from "../../assets/About Us Page Images/comparison slider img/desk.jpg?as=webp";
import blackChair from "../../assets/About Us Page Images/comparison slider img/gray_chair.jpg?as=webp";
import biegeSofa from "../../assets/About Us Page Images/comparison slider img/grey_sofa.jpg?as=webp";
import redChair from "../../assets/About Us Page Images/comparison slider img/red_chair.jpg?as=webp";
import storageBed from "../../assets/About Us Page Images/comparison slider img/storage_bed.jpg?as=webp";
import storageDesk from "../../assets/About Us Page Images/comparison slider img/storage_desk.jpg?as=webp";
import * as styles from "../../styles/about us styles/comparison_slider.module.css";

export default function ComparisonSlider() {
  const sliderRef = useRef<Slider>(null);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const handleMouseDown = () => {
    setOverlayVisible(false);
  };

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
    { first: graySofa, icon: <ChairOutlinedIcon className={styles.nav_icon} />, second: biegeSofa },
    { first: blackChair, icon: <ChairAltOutlinedIcon className={styles.nav_icon} />, second: redChair },
    { first: desk, icon: <DeskOutlinedIcon className={styles.nav_icon} />, second: storageDesk },
    { first: bed, icon: <KingBedOutlinedIcon className={styles.nav_icon} />, second: storageBed },
    { first: cafeTable, icon: <TableRestaurantOutlinedIcon className={styles.nav_icon} />, second: coffeeTable },
  ];

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
        <NavigateBeforeOutlinedIcon className={styles.nav_arrow} onClick={prevSlide} />
        {images.map((imagePair, index) => (
          <div
            className={styles.nav_icon}
            key={index}
            onClick={() => {
              goToSlide(index);
            }}
          >
            {imagePair.icon}
          </div>
        ))}
        <NavigateNextRoundedIcon className={styles.nav_arrow} onClick={nextSlide} />
      </div>

      <div className={styles.comparison_slider} onMouseDown={handleMouseDown}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((imagePair, index) => (
            <div
              className={styles.slider_item}
              key={index}
              onMouseDown={(event) => {
                if (event.button === 2) event.stopPropagation();
              }}
            >
              <ImgComparisonSlider className={styles.image_container}>
                <img className={styles.image} slot="first" src={imagePair.first} />
                <img className={styles.image} slot="second" src={imagePair.second} />
              </ImgComparisonSlider>
              <div className={`${styles.overlay_text} ${!overlayVisible ? styles.hidden : ""}`}>
                <ArrowBackOutlinedIcon />
                Drag to explore
                <ArrowForwardOutlinedIcon />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
