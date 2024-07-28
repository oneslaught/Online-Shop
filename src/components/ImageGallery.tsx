import React from "react";

interface GalleryProps {
  alt: string;
  h: number;
  src: string;
  text: string;
  w: number;
}

import abstractTable from "../assets/abstract_table.jpg?as=webp";
import chair from "../assets/chair.jpg?as=webp";
import tableLamp from "../assets/crescent_table_lamp.jpeg?as=webp";
import tvStand from "../assets/iwell_tv_stand.jpg?as=webp";
import closet from "../assets/mahmayi_closet.jpg?as=webp";
import uniqueTable from "../assets/unique_table.jpg?as=webp";
import * as styles from "../styles/image_gallery.module.css";

const images = [
  { alt: "nature", h: 2, src: abstractTable, text: "sometext", w: 3 },
  { alt: "tables", h: 3, src: uniqueTable, text: "Tables", w: 3 },
  { alt: "chairs", h: 2, src: chair, text: "Chairs", w: 1 },
  { alt: "fitness", h: 1, src: tvStand, text: "Fitness", w: 2 },
  { alt: "food", h: 1, src: closet, text: "Food", w: 4 },
  { alt: "lamp", h: 1, src: tableLamp, text: "Lamps", w: 1 },
];

const GalleryItem = ({ alt, h, src, text, w }: GalleryProps) => (
  <div className={`${styles.gallery_container} ${styles[`w_${w}`]} ${styles[`h_${h}`]}`}>
    <div className={styles.gallery_item}>
      <div className={styles.image}>
        <img alt={alt} src={src} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);

export default function App() {
  return (
    <div>
      <h2>Dive into a sea of design diversity</h2>
      <div className={styles.container}>
        {images.map((image, index) => (
          <GalleryItem alt={image.alt} h={image.h} key={index} src={image.src} text={image.text} w={image.w} />
        ))}
      </div>
    </div>
  );
}
