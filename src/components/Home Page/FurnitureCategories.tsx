import React from "react";

import wallShelf from "../../assets/Home Page Images/furniture categories img/cube_wall_shelf.jpg?as=webp";
import officeChair from "../../assets/Home Page Images/furniture categories img/office_chair.jpg?as=webp";
import pouf from "../../assets/Home Page Images/furniture categories img/pouf.jpg?as=webp";
import shoeRack from "../../assets/Home Page Images/furniture categories img/shoe_rack.jpg?as=webp";
import * as styles from "../../styles/home styles/furniture_categories.module.css";

interface Category {
  href: string;
  imageSrc: string;
  label: string;
}

const categories: Category[] = [
  { href: "#", imageSrc: wallShelf, label: "Wall shelves" },
  { href: "#", imageSrc: pouf, label: "Poufs" },
  { href: "#", imageSrc: shoeRack, label: "Hallway furniture" },
  { href: "#", imageSrc: officeChair, label: "Office furniture" },
];

export default function FurnitureCategories() {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <div className={styles.category_item} key={index}>
          <a href={category.href}>
            <img alt={category.label} className={styles.image} src={category.imageSrc} />
          </a>
          <span className={styles.label}>
            <a href={category.href}>{category.label}</a>
          </span>
        </div>
      ))}
    </div>
  );
}
