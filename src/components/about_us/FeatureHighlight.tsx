import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";

import cat from "../../assets/about_us_img/feature_highlight/cat.jpg?as=webp";
import family from "../../assets/about_us_img/feature_highlight/family.jpg?as=webp";
import kids from "../../assets/about_us_img/feature_highlight/kids.jpg?as=webp";
import * as styles from "../../styles/about_us_styles/feature_highlight.module.css";
import StringSplitRegex from "../../utils/StringSplitRegex";

interface ContentProps {
  heading: string;
  image: string;
  paragraph: string;
  reverse: boolean;
}

const contentData = [
  {
    heading: "Creating Spaces You`ll Love",
    image: kids,
    paragraph:
      "At Loxavi, we believe that every home should be a reflection of your unique style and personality. " +
      "Our mission is to provide high-quality, stylish, and affordable furniture that transforms your space into a place you truly love. " +
      "From modern minimalism to timeless classics, our carefully curated collections are designed to inspire and elevate your home. " +
      "We are passionate about helping you create a space that is not just functional, but a true sanctuary.",
  },
  {
    heading: "Crafting Sustainable Comfort",
    image: cat,
    paragraph:
      "We are committed to sustainability without compromising on style or comfort. " +
      "Our furniture collections are thoughtfully designed with eco-friendly materials, " +
      "ensuring that your home not only looks beautiful but also contributes to a healthier planet. " +
      "We believe that the choices we make today shape the world of tomorrow, " +
      "which is why we prioritize sustainable practices in everything we do.",
  },
  {
    heading: "Seamless Delivery, Every Time",
    image: family,
    paragraph:
      "Timely and reliable delivery is crucial to your shopping experience. " +
      "That’s why we've optimized our logistics network to ensure your furniture arrives on time and in perfect condition, " +
      "no matter where you are. From our warehouse to your doorstep, every step of the process is handled with care and precision. " +
      "With real-time tracking and flexible delivery options, we make sure that your new home additions reach you quickly and hassle-free, " +
      "so you can start enjoying them right away.",
  },
];

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const tiltOptions = {
  max: 25,
  perspective: 1200,
  scale: 1.0,
  speed: 400,
};

const ContentBlock = ({ heading, image, paragraph, reverse }: ContentProps) => {
  const headingChars = StringSplitRegex(heading);
  const paragraphChars = StringSplitRegex(paragraph);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [viewCount, setViewCount] = useState(0);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedAboutUs");
    if (!hasVisited) {
      setInitialRender(true);
      sessionStorage.setItem("hasVisitedAboutUs", "true");
    } else {
      setInitialRender(false);
    }
  }, []);

  useEffect(() => {
    if (isInView && viewCount < 2 && !animationCompleted) {
      setViewCount((prevCount) => prevCount + 1);
    }
    if (viewCount >= 2) {
      setAnimationCompleted(true);
    }
  }, [isInView, viewCount, animationCompleted]);

  return (
    <div className={reverse ? styles.rev_container : styles.container}>
      <Tilt className={styles.easing_anim} options={tiltOptions}>
        <section ref={ref}>
          <motion.img
            alt={heading}
            animate={{
              opacity: animationCompleted || isInView ? 1 : 0,
              transform: animationCompleted || isInView ? "none" : `translateX(${reverse ? "100vw" : "-100vw"})`,
            }}
            className={styles.image}
            initial={false}
            src={image}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
          />
        </section>
      </Tilt>
      <div className={styles.content_container}>
        <div className={styles.content}>
          {initialRender ? (
            <>
              <motion.h2
                animate={viewCount < 2 ? "hidden" : "reveal"}
                className={styles.content_name}
                initial="hidden"
                style={{ opacity: animationCompleted ? 1 : 0 }}
                transition={{ staggerChildren: 0.03 }}
              >
                {headingChars.map((char, index) => (
                  <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                animate={viewCount < 2 ? "hidden" : "reveal"}
                className={styles.content_des}
                initial="hidden"
                style={{ opacity: animationCompleted ? 1 : 0 }}
                transition={{ staggerChildren: 0.015 }}
              >
                {paragraphChars.map((char, index) => (
                  <motion.span key={index} transition={{ duration: 0.35 }} variants={charVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </>
          ) : (
            <>
              <motion.h2
                className={styles.content_name}
                initial="hidden"
                transition={{ staggerChildren: 0.03 }}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function OurStory() {
  return (
    <>
      {contentData.map((content, index) => (
        <ContentBlock heading={content.heading} image={content.image} key={index} paragraph={content.paragraph} reverse={index % 2 === 0} />
      ))}
    </>
  );
}
