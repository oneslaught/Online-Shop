import React from "react";

import CreamSofa from "../../assets/cream_style_sofa_set.jpg?as=webp";
import EmperiorSofa from "../../assets/emperior_sofa_set.jpg?as=webp";
import WoodenTVCabinet from "../../assets/wooden_tv_cabinet_set.jpg?as=webp";
import * as styles from "../../styles/home styles/new_collections.module.css";

export default function NewCollections() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>New Collections</h2>
      <div className={styles.item_container}>
        <div className={styles.item}>
          <img alt="Emperior sofa set" className={styles.image} src={EmperiorSofa} />
          <p className={styles.caption}>
            <a href="#">Shop Emperior Sofa Set</a>
          </p>
        </div>
        <div className={styles.item}>
          <img alt="Wooden TV cabinet set" className={styles.image} src={WoodenTVCabinet} />
          <p className={styles.caption}>
            <a href="#">Shop TV Cabinet Set</a>
          </p>
        </div>
        <div className={styles.item}>
          <img alt="Cream style sofa set" className={styles.image} src={CreamSofa} />
          <p className={styles.caption}>
            <a href="#">Shop Crem Style Sofa Set</a>
          </p>
        </div>
      </div>
    </div>
  );
}
