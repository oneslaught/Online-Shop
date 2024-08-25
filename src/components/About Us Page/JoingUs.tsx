import { motion } from "framer-motion";
import React from "react";

import joingImg from "../../assets/About Us Page Images/joing us img/employees.jpg?as=webp";
import * as styles from "../../styles/about us styles/joing_us.module.css";

export default function JoingUs() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={joingImg}></img>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <motion.h2
            className={styles.content_text}
            initial="hidden"
            transition={{ delay: 0.25, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, top: 30 },
              visible: { opacity: 1, top: 0 },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            Want to joing our team?
          </motion.h2>
          <motion.button
            className={styles.content_btn}
            initial="hidden"
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, top: 40 },
              visible: { opacity: 1, top: 0 },
            }}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <span>Contact us</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
