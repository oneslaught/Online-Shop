import React from "react";

import tvStand from "../assets/iwell_tv_stand.jpg?as=webp";
import sideTable from "../assets/sideTable.jpg?as=webp";
import * as styles from "../styles/furniture_showcase.module.css";

interface SectionData {
  altText: string;
  buttonText: string;
  heading: string;
  imageSrc: string;
  subheading: string;
}

const sections: SectionData[] = [
  {
    altText: "Storage Furniture",
    buttonText: "Shop Storage Furniture",
    heading: "Smart, stylish storage.",
    imageSrc: tvStand,
    subheading: "Clutter? Never met her.",
  },
  {
    altText: "Lounge Chairs",
    buttonText: "Shop Lounge Chairs",
    heading: "Loaf, lollygag, linger.",
    imageSrc: sideTable,
    subheading: "These lounge chairs make it hard to do much else.",
  },
];

const FurnitureShowcase: React.FC = () => {
  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <div className={styles.section} key={index}>
          <div className={styles.image_container}>
            <img alt={section.altText} className={styles.image} src={section.imageSrc} />
            <div className={styles.overlay}>
              <div className={styles.heading}>{section.heading}</div>
              <div className={styles.subheading}>{section.subheading}</div>
              <button className={styles.button}>{section.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureShowcase;
