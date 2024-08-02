import React from "react";

interface GalleryProps {
  des: string;
  h: number;
  name: string;
  src: string;
  w: number;
}

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import bed from "../assets/bed.jpeg?as=webp";
import besideTable from "../assets/beside_table.jpg?as=webp";
import chair from "../assets/chair.jpg?as=webp";
import closet from "../assets/closet.jpg?as=webp";
import tableLamp from "../assets/crescent_table_lamp.jpeg?as=webp";
import fireplace from "../assets/fireplace.jpg?as=webp";
import mirror from "../assets/mirror.jpg?as=webp";
import sofa from "../assets/sofa.jpg?as=webp";
import table from "../assets/unique_table.jpg?as=webp";
import * as styles from "../styles/image_gallery.module.css";

const firstImages = [
  {
    des: "Create a cozy and comfortable place to relax with our stylish beds that will become the focal point of your bedroom",
    h: 3,
    name: "bed",
    src: bed,
    w: 4,
  },
  {
    des: "Add elegance to your decor with unique tables that are perfect for any living room or dining room",
    h: 4,
    name: "table",
    src: table,
    w: 6,
  },
  {
    des: "Immerse yourself in a world of comfort and style with contemporary chairs perfect for relaxing and reading.",
    h: 3,
    name: "chair",
    src: chair,
    w: 2,
  },
  {
    des: "Organize your space with spacious and stylish closets that will add sophistication to any room",
    h: 4,
    name: "closet",
    src: closet,
    w: 2,
  },
  { des: "Our bedside tables will add a touch of elegance to your space", h: 3, name: "beside table", src: besideTable, w: 3 },
  {
    des: "Brighten up your home with table lamps that will add warmth and coziness to any corner of your home",
    h: 3,
    name: "lamp",
    src: tableLamp,
    w: 3,
  },
  {
    des: "Create the illusion of space and light with mirrors that will become a striking accent in your interiors",
    h: 4,
    name: "mirror",
    src: mirror,
    w: 2,
  },
  {
    des: "This luxurious sofa will offer you unrivaled comfort and style, making your living room a place to relax and gather",
    h: 3,
    name: "sofa",
    src: sofa,
    w: 3,
  },
  {
    des: "Add an atmosphere of warmth and comfort to your home with fireplaces that will become the heart of your dwelling",
    h: 3,
    name: "fireplace",
    src: fireplace,
    w: 5,
  },
];

const GalleryItem = ({ des, h, name, src, w }: GalleryProps) => (
  <Box className={`${styles.gallery_container} ${styles[`w_${w}`]} ${styles[`h_${h}`]}`}>
    <Box className={styles.gallery_item}>
      <Box className={styles.image}>
        <img alt={name} src={src} />
        <Box className={styles.overlay}>
          <Typography className={styles.overlay_header} variant="h3">
            {name}
          </Typography>
          <Typography paragraph>{des}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default function ImageGallery() {
  return (
    <Box>
      <Typography className={styles.header} variant="h2">
        Dive into a sea of design diversity
      </Typography>
      <Box className={styles.container}>
        {firstImages.map((image, index) => (
          <GalleryItem des={image.des} h={image.h} key={index} name={image.name} src={image.src} w={image.w} />
        ))}
      </Box>
    </Box>
  );
}
