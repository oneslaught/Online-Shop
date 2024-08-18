import React from "react";

import * as styles from "../../styles/about us styles/global_brand.module.css";

export default function GlobalBrand() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>A Global Brand</h2>
      <p className={styles.text}>
        With global headquarters and an extensive network of logistics hubs and customer service centers, we’re here to create that feeling
        of home for everyone, anywhere.
      </p>
      <div className={styles.description}>
        <h3 className={styles.subtitle}>Corporate Offices: Purple Pins</h3>
        <p className={styles.text}>
          Our corporate headquarters in Boston and Berlin are surrounded by world-class technology and educational institutions, providing
          access to top talent.
        </p>
        <h3 className={styles.subtitle}>Fulfillment & Home Delivery Network: Yellow Pins</h3>
        <p className={styles.text}>
          We operate 18 fulfillment and 38 delivery centers representing millions of square feet across the U.S., Germany, Canada, and the
          U.K.
        </p>
        <h3 className={styles.subtitle}>Sales & Service Centers: Green Pins</h3>
        <p className={styles.text}>
          Our Sales & Service teams in the U.S., Germany, Ireland, Canada, and the U.K. along with our virtual team allow us to meet the
          needs of our global customer base.
        </p>
      </div>
      <div className={styles.map}>
        <img alt="Global Brand Map" className={styles.image} src="path_to_map_image" />
      </div>
    </div>
  );
}
