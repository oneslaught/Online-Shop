import React from "react";

import background from "../assets/about_us_bg.jpg?as=webp";
import * as styles from "../styles/about_us.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <img alt="About Us" className={styles.image} src={background} />
      <div className={styles.text}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.</p>
      </div>
    </div>
  );
}
