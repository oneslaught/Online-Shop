import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import image from "../assets/about_us.jpg?as=webp";
import * as styles from "../styles/about_us.module.css";

export default function AboutUs() {
  return (
    <Box className={styles.container}>
      <Box className={styles.image_container}>
        <img alt="About us" className={styles.image} src={image} />
      </Box>
      <Box className={styles.content_container}>
        <Box className={styles.content}>
          <Typography className={styles.content_name} variant="h2">
            About Us
          </Typography>
          <Typography className={styles.content_des} paragraph>
            Loxavi has been delighting its customers with stylish and high-quality furniture for home and office for many years. We are
            proud of our wide assortment, which includes both modern and classic models. Our experts carefully select our suppliers to
            ensure the highest level of product quality. Fast delivery and first class service are our top priorities. Welcome to Loxavi,
            where your comfort and coziness is our main goal!
          </Typography>
          <button className={styles.content_btn}>
            <Typography component="span">Learn more</Typography>
          </button>
        </Box>
      </Box>
    </Box>
  );
}
