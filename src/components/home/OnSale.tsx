import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Slider from "react-slick";

import diningSet from "../../assets/home_img/on_sale/dining_table_set.jpg?as=webp";
import nightStand from "../../assets/home_img/on_sale/eily_night_stand.jpg?as=webp";
import bed from "../../assets/home_img/on_sale/hattie_bed_frame.jpg?as=webp";
import tvStand from "../../assets/home_img/on_sale/iwell_tv_stand.jpg?as=webp";
import closet from "../../assets/home_img/on_sale/mahmayi_closet.jpg?as=webp";
import besideTable from "../../assets/home_img/on_sale/maison_esto_hanging_beside_table.jpg?as=webp";
import lamp from "../../assets/home_img/on_sale/mushroom_lamp.jpg?as=webp";
import mirror from "../../assets/home_img/on_sale/neutype_arched_mirror.jpg?as=webp";
import chairs from "../../assets/home_img/on_sale/saville_dining_chairs.jpeg?as=webp";
import reclinerChair from "../../assets/home_img/on_sale/soarflash_power_recliner_chair.jpg?as=webp";
import sofa from "../../assets/home_img/on_sale/sofa_angel.jpg?as=webp";
import * as styles from "../../styles/home_styles/on_sale.module.css";

interface Product {
  actualPrice: number;
  description: string;
  discount: string;
  image: string;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    actualPrice: 349.99,
    description: "Stylish dining chair",
    discount: "37% off",
    image: chairs,
    name: "Saville Dining Chair",
    price: 219.99,
  },
  {
    actualPrice: 1339.99,
    description: "Luxury sofa for the living room",
    discount: "19% off",
    image: sofa,
    name: "Sofa Angel",
    price: 1089.99,
  },
  {
    actualPrice: 209.99,
    description: "Comfortable bed for the bedroom",
    discount: "14% off",
    image: bed,
    name: "Hattie Bed Frame",
    price: 179.99,
  },
  {
    actualPrice: 79.99,
    description: "Compact storage closet",
    discount: "25% off",
    image: closet,
    name: "Mahmayi Closet",
    price: 59.99,
  },
  {
    actualPrice: 309.99,
    description: "Comfortable bedside table",
    discount: "19% off",
    image: nightStand,
    name: "Eily Night Stand",
    price: 249.99,
  },
  {
    actualPrice: 219.99,
    description: "Hanging table for bed",
    discount: "18% off",
    image: besideTable,
    name: "ESTO Hanging Beside Table",
    price: 179.99,
  },
  {
    actualPrice: 399.99,
    description: "Elegant arched mirror",
    discount: "5% off",
    image: mirror,
    name: "NeuType Arched Mirror",
    price: 379.99,
  },
  {
    actualPrice: 54.99,
    description: "Designer mushroom lamp",
    discount: "16% off",
    image: lamp,
    name: "FLBT Mushroom Lamp",
    price: 45.99,
  },
  {
    actualPrice: 129.99,
    description: "Modern TV stand",
    discount: "4% off",
    image: tvStand,
    name: "Iwell TV Stand",
    price: 124.99,
  },
  {
    actualPrice: 219.99,
    description: "Comfortable chair with recliner",
    discount: "9% off",
    image: reclinerChair,
    name: "SoarFlash Power Recliner Chair",
    price: 199.99,
  },
  {
    actualPrice: 249.99,
    description: "Compact dinner table set for 4",
    discount: "1% off",
    image: diningSet,
    name: "MUUOKY Dining Table Set",
    price: 246.99,
  },
];

export default function OnSale() {
  const settings = {
    infinite: false,
    initialSlide: 0,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <NavigateBeforeIcon />,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          infinite: false,
          slidesToScroll: 2,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1052,
        settings: {
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 3,
          speed: 700,
        },
      },
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
      <Typography className={styles.product_header} variant="h2">
        On Sale
      </Typography>
      <div className={styles.on_sale_slider}>
        <Slider {...settings} className={styles.product_container}>
          {products.map((product) => (
            <Box className={styles.product_card} key={product.name}>
              <Box className={styles.product_image}>
                <Box className={styles.discount_tag} component="span">
                  {product.discount}
                </Box>
                <img alt={product.name} className={styles.product_thumb} src={product.image} />
                <button className={styles.card_btn}>add to cart</button>
              </Box>
              <Box className={styles.product_info}>
                <button className={`${styles.card_btn} ${styles.card_btn_mobile}`}>add to cart</button>
                <Typography className={styles.product_brand} variant="h4">
                  {product.name}
                </Typography>
                <Typography className={styles.product_des} paragraph>
                  {product.description}
                </Typography>
                <Box className={styles.price} component="span">
                  {product.price}$
                </Box>
                <Box className={styles.actual_price} component="span">
                  {product.actualPrice}$
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
}
