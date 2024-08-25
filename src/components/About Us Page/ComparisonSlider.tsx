import { ImgComparisonSlider } from "@img-comparison-slider/react";
import React from "react";

import graySofa from "../../assets/About Us Page Images/comparison slider img/biege_sofa.jpg?as=webp";
import blackChair from "../../assets/About Us Page Images/comparison slider img/black_chair.jpg?as=webp";
import biegeSofa from "../../assets/About Us Page Images/comparison slider img/grey_sofa.jpg?as=webp";
import redChair from "../../assets/About Us Page Images/comparison slider img/red_chair.jpg?as=webp";
import * as styles from "../../styles/about us styles/comparison_slider.module.css";

export default function ComparisonSlider() {
  return (
    <div className={styles.container}>
      <ImgComparisonSlider>
        <img className={styles.image} slot="first" src={graySofa} />
        <img className={styles.image} slot="second" src={biegeSofa} />
      </ImgComparisonSlider>
      <ImgComparisonSlider>
        <img className={styles.image} slot="first" src={blackChair} />
        <img className={styles.image} slot="second" src={redChair} />
      </ImgComparisonSlider>
    </div>
  );
}
