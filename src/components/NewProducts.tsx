import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef } from "react";

import nightStand from "../assets/eily_night_stand.jpg?as=webp";
import bed from "../assets/hattie_bed_frame.jpg?as=webp";
import besideTable from "../assets/maison_esto_hanging_beside_table.jpg?as=webp";
import mirror from "../assets/neutype_arched_mirror.jpg?as=webp";
import closet from "../assets/portable_closet.jpg?as=webp";
import chairs from "../assets/saville_dining_chairs.jpeg?as=webp";
import sofa from "../assets/sofa_angel.jpg?as=webp";
import * as styles from "../styles/new_products.module.css";

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
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: chairs,
    name: "Saville Dining Chair",
    price: 219.99,
  },
  {
    actualPrice: 1339.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: sofa,
    name: "Sofa Angel",
    price: 1089.99,
  },
  {
    actualPrice: 209.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: bed,
    name: "Hattie Bed Frame",
    price: 179.99,
  },
  {
    actualPrice: 79.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: closet,
    name: "Some Closet",
    price: 59.99,
  },
  {
    actualPrice: 309.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: nightStand,
    name: "Eily Night Stand",
    price: 249.99,
  },
  {
    actualPrice: 219.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: besideTable,
    name: "ESTO Hanging Beside Table",
    price: 179.99,
  },
  {
    actualPrice: 399.99,
    description: "Lorem ipsum dolor sit amet.",
    discount: "50% off",
    image: mirror,
    name: "NeuType Arched Mirror",
    price: 379.99,
  },
];

export default function NewProducts() {
  const productContainerRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const productContainer = productContainerRef.current;
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;

    if (productContainer && nextBtn && prevBtn) {
      const handleNextClick = () => {
        const containerWidth = productContainer.getBoundingClientRect().width;
        productContainer.scrollLeft += containerWidth;
      };

      const handlePrevClick = () => {
        const containerWidth = productContainer.getBoundingClientRect().width;
        productContainer.scrollLeft -= containerWidth;
      };

      nextBtn.addEventListener("click", handleNextClick);
      prevBtn.addEventListener("click", handlePrevClick);

      return () => {
        nextBtn.removeEventListener("click", handleNextClick);
        prevBtn.removeEventListener("click", handlePrevClick);
      };
    }
  }, []);

  return (
    <Box className={styles.product}>
      <Box>
        <Typography className={styles.product_header} variant="h2">
          New products
        </Typography>

        <button className={styles.prev_btn} ref={prevBtnRef}>
          <NavigateBeforeIcon className={styles.btn_icon} />
        </button>
        <button className={styles.next_btn} ref={nextBtnRef}>
          <NavigateNextIcon className={styles.btn_icon} />
        </button>
        <Box className={styles.product_container} ref={productContainerRef}>
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
        </Box>
      </Box>
    </Box>
  );
}
