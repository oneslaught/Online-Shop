import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Slider from "react-slick";

import bed from "../assets/m_bed.jpg?as=webp";
import besideTable from "../assets/m_beside_table.jpg?as=webp";
import chair from "../assets/m_chair.jpg?as=webp";
import closet from "../assets/m_closet.jpg?as=webp";
import fireplace from "../assets/m_fireplace.jpg?as=webp";
import tableLamp from "../assets/m_lamp.jpg?as=webp";
import mirror from "../assets/m_mirror.jpg?as=webp";
import sofa from "../assets/m_sofa.jpg?as=webp";
import table from "../assets/m_table.jpg?as=webp";
import * as styles from "../styles/m_image_gallery.module.css";

interface Product {
  image: string;
  name: string;
}

const products: Product[] = [
  { image: closet, name: "closets" },
  { image: sofa, name: "sofas" },
  { image: bed, name: "beds" },
  { image: tableLamp, name: "table lamps" },
  { image: besideTable, name: "beside tables" },
  { image: table, name: "tables" },
  { image: mirror, name: "mirrors" },
  { image: chair, name: "chairs" },
  { image: fireplace, name: "fireplaces" },
];

export default function OnSale() {
  const settings = {
    infinite: false,
    initialSlide: 0,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <NavigateBeforeIcon />,
    responsive: [
      {
        breakpoint: 808,
        settings: {
          infinite: true,
          initialSlide: 2,
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 700,
        },
      },
    ],
    slidesToScroll: 2,
    slidesToShow: 5,
    speed: 600,
  };
  return (
    <Box className={styles.product}>
      <Typography className={styles.header} variant="h2">
        Dive into a sea of design diversity
      </Typography>
      <Slider {...settings} className={styles.product_container}>
        {products.map((product) => (
          <Box className={styles.product_card} key={product.name}>
            <Box className={styles.product_image}>
              <img alt={product.name} className={styles.product_thumb} src={product.image} />
              <button className={styles.card_btn}>{`Shop ${product.name}`}</button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
