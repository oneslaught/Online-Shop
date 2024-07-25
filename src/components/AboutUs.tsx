import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

import image from "../assets/about_us_bg.jpg?as=webp";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, maxime? Explicabo doloremque, unde omnis possimus, recusandae
            mollitia sunt, doloribus quisquam sit consequuntur eligendi harum facilis reiciendis porro. Facere, blanditiis. Optio.
          </Typography>
          <Button disableRipple>Learn more</Button>
        </Box>
      </Box>
    </Box>
  );
}
