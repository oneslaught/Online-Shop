import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import bed from "../../assets/home_img/image_gallery/bed.jpeg?as=webp";
import besideTable from "../../assets/home_img/image_gallery/beside_table.jpg?as=webp";
import chair from "../../assets/home_img/image_gallery/chair.jpg?as=webp";
import closet from "../../assets/home_img/image_gallery/closet.jpg?as=webp";
import fireplace from "../../assets/home_img/image_gallery/fireplace.jpg?as=webp";
import mirror from "../../assets/home_img/image_gallery/mirror.jpg?as=webp";
import sofa from "../../assets/home_img/image_gallery/sofa.jpg?as=webp";
import table from "../../assets/home_img/image_gallery/table.jpg?as=webp";
import tableLamp from "../../assets/home_img/image_gallery/table_lamp.jpeg?as=webp";
import * as styles from "../../styles/home_styles/image_gallery.module.css";
import ImageGalleryMobile from "./ImageGalleryMobile";

interface GalleryProps {
  h: number;
  name: string;
  src: string;
  w: number;
}

const firstImages = [
  { h: 3, name: "beds", src: bed, w: 4 },
  { h: 4, name: "tables", src: table, w: 6 },
  { h: 3, name: "chairs", src: chair, w: 2 },
  { h: 4, name: "closets", src: closet, w: 2 },
  { h: 3, name: "beside tables", src: besideTable, w: 3 },
  { h: 3, name: "table lamps", src: tableLamp, w: 3 },
  { h: 4, name: "mirrors", src: mirror, w: 2 },
  { h: 3, name: "sofas", src: sofa, w: 3 },
  { h: 3, name: "fireplaces", src: fireplace, w: 5 },
];

const GalleryItem = ({ h, name, src, w }: GalleryProps) => (
  <Box className={`${styles[`w_${w}`]} ${styles[`h_${h}`]}`}>
    <Box className={styles.gallery_item}>
      <Box className={styles.image}>
        <img alt={name} src={src} />
        <button className={styles.button}>
          <span>{`Shop ${name}`}</span>
        </button>
      </Box>
    </Box>
  </Box>
);

export default function ImageGallery() {
  const isMobile = useMediaQuery("(max-width: 808px)");

  if (isMobile) {
    return <ImageGalleryMobile />;
  }

  return (
    <Box>
      <Typography className={styles.header} variant="h2">
        Dive into a sea of design diversity
      </Typography>
      <Box className={styles.container}>
        {firstImages.map((image, index) => (
          <GalleryItem h={image.h} key={index} name={image.name} src={image.src} w={image.w} />
        ))}
      </Box>
    </Box>
  );
}
