import React from "react";

import * as styles from "../styles/contact_us.module.css";

export default function ContactUs() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Our Company</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>About us</li>
          <li className={styles.listItem}>Press</li>
          <li className={styles.listItem}>Careers</li>
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Gift Card</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Customer Care</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Track My Order</li>
          <li className={styles.listItem}>Start a Return</li>
          <li className={styles.listItem}>FAQ</li>
          <li className={styles.listItem}>Shipping & Returns Policy</li>
          <li className={styles.listItem}>Terms of Service</li>
          <li className={styles.listItem}>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Programs</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Samples</li>
          <li className={styles.listItem}>Trade Program</li>
          <li className={styles.listItem}>Affiliate Program</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Join our mailing list</h3>
        <form className={styles.newsletterForm}>
          <input className={styles.input} placeholder="Your email" required type="email" />
          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </form>
        <div className={styles.followUs}>
          <a className={styles.socialIcon} href="#">
            📘
          </a>
          <a className={styles.socialIcon} href="#">
            📷
          </a>
          <a className={styles.socialIcon} href="#">
            📌
          </a>
          <a className={styles.socialIcon} href="#">
            🎵
          </a>
        </div>
      </div>
    </footer>
  );
}
