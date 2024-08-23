import React from "react";

import joingImg from "../../assets/About Us Page Images/joing us img/employees.jpg?as=webp";
import * as styles from "../../styles/about us styles/joing_us.module.css";

export default function JoingUs() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={joingImg}></img>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <h2 className={styles.content_text}>Want to joing our team?</h2>
          <button className={styles.content_btn}>
            <span>Contact us</span>
          </button>
        </div>
      </div>
    </div>
  );
}
