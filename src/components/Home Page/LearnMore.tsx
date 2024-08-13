import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../assets/about_us.jpg?as=webp";
import * as styles from "../../styles/home styles/learn_more.module.css";
import StringSplitRegex from "../../utils/StringSplitRegex";

const heading = "About Us";
const paragraph =
  "Loxavi has been delighting its customers with stylish and high-quality " +
  "furniture for home and office for many years. We are proud of our wide " +
  "assortment, which includes both modern and classic models. Our experts " +
  "carefully select our suppliers to ensure the highest level of product quality. " +
  "Fast delivery and first class service are our top priorities. Welcome to " +
  "Loxavi, where your comfort and coziness is our main goal!";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function LearnMore() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about-us");
  };

  const headingChars = StringSplitRegex(heading);
  const paragraphChars = StringSplitRegex(paragraph);
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <img alt="About us" className={styles.image} src={image} />
      </div>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <motion.h2
            className={styles.content_name}
            initial="hidden"
            transition={{ staggerChildren: 0.15 }}
            viewport={{ once: true }}
            whileInView="reveal"
          >
            {headingChars.map((char) => (
              <motion.span key={char} transition={{ duration: 0.5 }} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className={styles.content_des}
            initial="hidden"
            transition={{ staggerChildren: 0.015 }}
            viewport={{ once: true }}
            whileInView="reveal"
          >
            {paragraphChars.map((char) => (
              <motion.span key={char} transition={{ duration: 0.35 }} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <button className={styles.content_btn} onClick={handleLearnMoreClick}>
            <span>Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
}
