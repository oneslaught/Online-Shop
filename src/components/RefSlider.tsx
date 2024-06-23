import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useRef } from "react";

import Bathroom from "../assets/bathroom.jpg?as=webp";
import Bedroom from "../assets/bedroom.jpg?as=webp";
import Dining from "../assets/kitchen.jpeg?as=webp";
import Living from "../assets/living_room.jpg?as=webp";
import Office from "../assets/office.jpeg?as=webp";
import Outdoor from "../assets/outdoor.jpg?as=webp";
import * as styles from "../styles/ref_slider.module.css";

export default function Slider() {
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(`.${styles.item}`);
      slideRef.current.appendChild(items[0]!);
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll(`.${styles.item}`);
      slideRef.current.prepend(items[items.length - 1]!);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide} ref={slideRef}>
        <div className={styles.item} style={{ backgroundImage: `url(${Dining})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Dining</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.item} style={{ backgroundImage: `url(${Living})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Living</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.item} style={{ backgroundImage: `url(${Outdoor})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Outdoor</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.item} style={{ backgroundImage: `url(${Office})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Office</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.item} style={{ backgroundImage: `url(${Bathroom})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Bathroom</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={styles.item} style={{ backgroundImage: `url(${Bedroom})` }}>
          <div className={styles.content}>
            <div className={styles.name}>Bedroom</div>
            <div className={styles.des}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <button className={styles.prev} onClick={prevSlide}>
          <ArrowBackIcon />
        </button>
        <button className={styles.next} onClick={nextSlide}>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}
