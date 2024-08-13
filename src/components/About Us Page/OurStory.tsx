import React from "react";

import headerImg from "../../assets/header_img.jpg?as=webp";
import * as styles from "../../styles/about us styles/our_story.module.css";

export default function OurStory() {
  return (
    <div>
      <img alt="our story" className={styles.header_img} src={headerImg} />
    </div>
  );
}
