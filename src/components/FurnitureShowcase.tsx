import React from "react";

import Chairs from "../assets/first.jpg?as=webp";
import Sofa from "../assets/second.jpg?as=webp";
import * as styles from "../styles/furniture_showcase.module.css";

const FurnitureShowcase: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.image_container}>
          <img alt="Storage Furniture" className={styles.image} src={Chairs} />
        </div>
        <div className={styles.heading}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <button className={styles.button}>SHOP STORAGE CHAIRS</button>
      </div>
      <div className={styles.section}>
        <div className={styles.image_container}>
          <img alt="Lounge Chairs" className={styles.image} src={Sofa} />
        </div>
        <div className={styles.heading}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.subheading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <button className={styles.button}>SHOP LOUNGE SOFAS</button>
      </div>
    </div>
  );
};

export default FurnitureShowcase;
