import React from "react";

import wordlMap from "../../assets/About Us Page Images/global brand img/world_map.jpg?as=webp";
import * as styles from "../../styles/about us styles/global_brand.module.css";

export default function GlobalBrand() {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.text_container}>
          <h2 className={styles.title}>Lorem ipsum dolor sit.</h2>
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque beatae nulla eos perspiciatis voluptas ullam repellendus, fugit
            sed dignissimos eaque exercitationem!
          </p>
          <div className={styles.description}>
            <h3 className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolore a sint. Eligendi pariatur, sunt quos saepe ipsam natus
              enim placeat alias.
            </p>
            <h3 className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ex magnam, dolores corrupti doloremque rerum nulla optio
              explicabo? Incidunt, suscipit.
            </p>
            <h3 className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod dolorum voluptatibus temporibus incidunt veniam sint
              obcaecati est.
            </p>
          </div>
        </div>
        <div className={styles.image_container}>
          <div className={styles.map}>
            <img alt="Global Brand Map" className={styles.image} src={wordlMap} />
          </div>
        </div>
      </div>
    </div>
  );
}
