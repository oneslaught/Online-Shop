import { ImgComparisonSlider } from "@img-comparison-slider/react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import DeskOutlinedIcon from "@mui/icons-material/DeskOutlined";
import EventSeatOutlinedIcon from "@mui/icons-material/EventSeatOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

import armrestsOfficeChair from "../../assets/about_us_img/comparison_slider/armrests_office_chair.jpg?as=webp";
import bed from "../../assets/about_us_img/comparison_slider/bed.jpg?as=webp";
import graySofa from "../../assets/about_us_img/comparison_slider/biege_sofa.jpg?as=webp";
import cafeTable from "../../assets/about_us_img/comparison_slider/cafe_table.jpg?as=webp";
import coffeeTable from "../../assets/about_us_img/comparison_slider/coffee_table.jpg?as=webp";
import desk from "../../assets/about_us_img/comparison_slider/desk.jpg?as=webp";
import blackChair from "../../assets/about_us_img/comparison_slider/gray_chair.jpg?as=webp";
import biegeSofa from "../../assets/about_us_img/comparison_slider/grey_sofa.jpg?as=webp";
import officeChair from "../../assets/about_us_img/comparison_slider/office_chair.jpg?as=webp";
import redChair from "../../assets/about_us_img/comparison_slider/red_chair.jpg?as=webp";
import storageBed from "../../assets/about_us_img/comparison_slider/storage_bed.jpg?as=webp";
import storageDesk from "../../assets/about_us_img/comparison_slider/storage_desk.jpg?as=webp";
import * as styles from "../../styles/about_us_styles/comparison_slider.module.css";

export default function ComparisonSlider() {
  const sliderRef = useRef<Slider>(null);
  const [clueVisible, setClueVisible] = useState(true);
  const [activeSlide, setActiveSlide] = useState(1);

  const handleAfterChange = (current: number) => {
    setActiveSlide(current);
  };

  const hideClue = () => {
    setClueVisible(false);
  };

  const settings = {
    afterChange: handleAfterChange,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    className: "center",
    draggable: false,
    focusOnSelect: true,
    infinite: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 808,
        settings: {
          centerMode: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 400,
        },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    swipe: false,
    swipeToSlide: false,
  };

  const images = [
    { first: graySofa, icon: <ChairOutlinedIcon />, second: biegeSofa },
    { first: blackChair, icon: <ChairAltOutlinedIcon />, second: redChair },
    { first: desk, icon: <DeskOutlinedIcon />, second: storageDesk },
    { first: bed, icon: <KingBedOutlinedIcon />, second: storageBed },
    { first: cafeTable, icon: <TableRestaurantOutlinedIcon />, second: coffeeTable },
    { first: officeChair, icon: <EventSeatOutlinedIcon />, second: armrestsOfficeChair },
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
      <div className={styles.nav_container}>
        <div className={styles.header_container}>
          <h2 className={styles.header}>Your style, Your choices, Your space</h2>
          <p className={styles.des}>Create a space that reflects your individuality. Loxavi is furniture designed especially for You.</p>
        </div>

        <div className={styles.slider_control_panel}>
          <NavigateBeforeOutlinedIcon className={styles.nav_arrow_before} onClick={prevSlide} />
          {images.map((imagePair, index) => {
            const IconComponent = imagePair.icon.type as React.ElementType;

            return (
              <IconComponent
                className={`${styles.nav_icon} ${index === activeSlide ? styles.active_icon : ""}`}
                key={index}
                onClick={() => {
                  goToSlide(index);
                }}
              />
            );
          })}
          <NavigateNextRoundedIcon className={styles.nav_arrow_next} onClick={nextSlide} />
        </div>
      </div>

      <div className={styles.comparison_slider} onContextMenu={hideClue} onMouseDown={hideClue} onTouchStart={hideClue}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((imagePair, index) => (
            <div className={styles.slider_item} key={index}>
              <ImgComparisonSlider className={styles.image_container}>
                <img className={styles.image} slot="first" src={imagePair.first} />
                <img className={styles.image} slot="second" src={imagePair.second} />
              </ImgComparisonSlider>
            </div>
          ))}
        </Slider>
        <div className={styles.clue_text_container}>
          <div className={`${styles.clue_text} ${!clueVisible ? styles.hidden : ""}`}>
            <ArrowBackOutlinedIcon className={styles.arrow_back} />
            <span>Drag to explore</span>
            <ArrowForwardOutlinedIcon className={styles.arrow_forward} />
          </div>
        </div>
      </div>
    </>
  );
}
