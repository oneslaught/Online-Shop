import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React from "react";
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

export default function ComparisonSlider() {
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
  return (
    <>
      <div className={styles.header_container}>
        <h2 className={styles.header}>Your style, your choices, your space</h2>
        <p className={styles.des}>Create a space that reflects your individuality. Loxavi is furniture designed especially for you.</p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <ImgComparisonSlider className={styles.slider_item}>
            <img className={styles.image} slot="first" src={graySofa} />
            <img className={styles.image} slot="second" src={biegeSofa} />
          </ImgComparisonSlider>
          <ImgComparisonSlider className={styles.slider_item}>
            <img className={styles.image} slot="first" src={blackChair} />
            <img className={styles.image} slot="second" src={redChair} />
          </ImgComparisonSlider>
          <ImgComparisonSlider className={styles.slider_item}>
            <img className={styles.image} slot="first" src={smallBesideTable} />
            <img className={styles.image} slot="second" src={tallBEsideTable} />
          </ImgComparisonSlider>
          <ImgComparisonSlider className={styles.slider_item}>
            <img className={styles.image} slot="first" src={bed} />
            <img className={styles.image} slot="second" src={storageBed} />
          </ImgComparisonSlider>
          <ImgComparisonSlider className={styles.slider_item}>
            <img className={styles.image} slot="first" src={cafeTable} />
            <img className={styles.image} slot="second" src={coffeeTable} />
          </ImgComparisonSlider>
        </Slider>
      </div>
    </>
  );
}
