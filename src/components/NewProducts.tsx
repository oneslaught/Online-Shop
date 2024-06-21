import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

import bed from "../assets/hattie_bed_frame.jpg?as=webp";
import chairs from "../assets/saville_dining_chairs.jpeg?as=webp";
import sofa from "../assets/sofa_angel.jpg?as=webp";
import * as styles from "../styles/new_products.module.css";

export default function NewProducts() {
  return (
    <Box sx={{ m: "90px 0" }}>
      <Box>
        <Typography sx={{ fontFamily: '"Lato", sans-serif', textAlign: "center" }} variant="h2">
          New products
        </Typography>
        <Box className={styles.product}>
          <NavigateBeforeIcon className={styles.prev_btn} />
          <NavigateNextIcon className={styles.next_btn} />
          <Box className={styles.product_container}>
            <Box className={styles.product_card}>
              <Box className={styles.product_image}>
                <Box className={styles.discount_tag} component="span">
                  50% off
                </Box>
                <img alt="" className={styles.product_thumb} src={chairs} />
                <button className={styles.card_btn}>add to cart</button>
              </Box>
              <Box className={styles.product_info}>
                <Typography className={styles.product_brand} variant="h2">
                  brand
                </Typography>
                <Typography className={styles.product_des} paragraph>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Box className={styles.price} component="span">
                  20$
                </Box>
                <Box className={styles.actual_price} component="span">
                  40$
                </Box>
              </Box>
            </Box>
            <Box className={styles.product_card}>
              <Box className={styles.product_image}>
                <Box className={styles.discount_tag} component="span">
                  50% off
                </Box>
                <img alt="" className={styles.product_thumb} src={sofa} />
                <button className={styles.card_btn}>add to cart</button>
              </Box>
              <Box className={styles.product_info}>
                <Typography className={styles.product_brand} variant="h2">
                  brand
                </Typography>
                <Typography className={styles.product_des} paragraph>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Box className={styles.price} component="span">
                  20$
                </Box>
                <Box className={styles.actual_price} component="span">
                  40$
                </Box>
              </Box>
            </Box>
            <Box className={styles.product_card}>
              <Box className={styles.product_image}>
                <Box className={styles.discount_tag} component="span">
                  50% off
                </Box>
                <img alt="" className={styles.product_thumb} src={bed} />
                <button className={styles.card_btn}>add to cart</button>
              </Box>
              <Box className={styles.product_info}>
                <Typography className={styles.product_brand} variant="h2">
                  brand
                </Typography>
                <Typography className={styles.product_des} paragraph>
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Box className={styles.price} component="span">
                  20$
                </Box>
                <Box className={styles.actual_price} component="span">
                  40$
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
