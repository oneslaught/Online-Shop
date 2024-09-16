import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

import headerImg from "../../assets/about_us_img/header/header.jpg?as=webp";
import * as styles from "../../styles/about_us_styles/header.module.css";

export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible").catch((error: unknown) => {
        console.error("Animation failed:", error);
      });
      slideControls.start("visible").catch((error: unknown) => {
        console.error("Animation failed:", error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={headerImg} />
        <div className={styles.heading_container} ref={ref}>
          <motion.div
            animate={mainControls}
            className={styles.heading}
            initial="hidden"
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            About Us
          </motion.div>
          <motion.div
            animate={slideControls}
            className={styles.text_stripe}
            initial="hidden"
            transition={{ duration: 0.8, ease: "easeIn" }}
            variants={{
              hidden: { left: 0, opacity: 0.9 },
              visible: { left: "100%", opacity: 0 },
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
}
