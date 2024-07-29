import React from "react";

interface GalleryProps {
  alt: string;
  h: number;
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
  { alt: "bed", h: 3, src: bed, w: 4 },
  { alt: "table", h: 4, src: table, w: 6 },
  { alt: "chair", h: 3, src: chair, w: 2 },
  { alt: "closet", h: 4, src: closet, w: 2 },
  { alt: "beside table", h: 3, src: besideTable, w: 3 },
  { alt: "lamp", h: 3, src: tableLamp, w: 3 },
  { alt: "mirror", h: 4, src: mirror, w: 2 },
  { alt: "sofa", h: 3, src: sofa, w: 3 },
  { alt: "fireplace", h: 3, src: fireplace, w: 5 },
];

// const secondImages = [
//   { alt: "fireplace", h: 2, src: fireplace, w: 3 },
//   { alt: "table", h: 3, src: table, w: 3 },
//   { alt: "chair", h: 2, src: chair, w: 1 },
//   { alt: "mirror", h: 1, src: mirror, w: 2 },
//   { alt: "food", h: 1, src: closet, w: 4 },
//   { alt: "lamp", h: 1, src: tableLamp, w: 1 },
// ];

const GalleryItem = ({ alt, h, src, w }: GalleryProps) => (
  <Box className={`${styles.gallery_container} ${styles[`w_${w}`]} ${styles[`h_${h}`]}`}>
    <Box className={styles.gallery_item}>
      <Box className={styles.image}>
        <img alt={alt} src={src} />
      </Box>
    </Box>
  </Box>
);

export default function ImageGallery() {
  // const [images, setImages] = useState(firstImages);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 690) {
  //       setImages(secondImages);
  //     } else {
  //       setImages(secondImages);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Box>
      <Typography className={styles.header} variant="h2">
        Dive into a sea of design diversity
      </Typography>
      <Box className={styles.container}>
        {firstImages.map((image, index) => (
          <GalleryItem alt={image.alt} h={image.h} key={index} src={image.src} w={image.w} />
        ))}
      </Box>
    </Box>
  );
}
