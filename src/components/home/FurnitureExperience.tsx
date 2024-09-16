import React from "react";

import deliveryTruck from "../../assets/home_img/furniture_expirience/delivery_truck.png?as=webp";
import deliveryPackage from "../../assets/home_img/furniture_expirience/package.png?as=webp";
import trees from "../../assets/home_img/furniture_expirience/trees.png?as=webp";
import * as styles from "../../styles/home_styles/furniture_expirience.module.css";

export default function ProblemsSection() {
  return (
    <div className={styles.problems_section}>
      <h2>We’re Transforming Your Furniture Experience</h2>
      <div className={styles.problems_container}>
        <div className={styles.problem_item}>
          <img alt="Fast Shipping" src={deliveryTruck} />
          <h3>Speedy Delivery</h3>
          <p>Our efficient logistics ensure that your order arrives quickly and in perfect condition, straight to your doorstep.</p>
        </div>
        <div className={styles.problem_item}>
          <img alt="Easy Assembly" src={deliveryPackage} />
          <h3>Simple Assembly</h3>
          <p>Our furniture is designed for easy assembly with clear instructions, so you can enjoy your new pieces without the hassle.</p>
        </div>
        <div className={styles.problem_item}>
          <img alt="Eco-friendly Materials" src={trees} />
          <h3>Eco-friendly Materials</h3>
          <p>We use sustainable materials to create our furniture, helping you make environmentally responsible choices for your home.</p>
        </div>
      </div>
    </div>
  );
}
