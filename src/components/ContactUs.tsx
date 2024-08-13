import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import { motion } from "framer-motion";
import React from "react";

import logoIcon from "../assets/logoIcon.png?as=webp";
import * as styles from "../styles/contact_us.module.css";

const sections = [
  {
    links: [
      { href: "#", text: "About us" },
      { href: "#", text: "Press" },
      { href: "#", text: "Careers" },
      { href: "#", text: "Contact" },
      { href: "#", text: "Gift Card" },
    ],
    title: "Our Company",
  },
  {
    links: [
      { href: "#", text: "Track My Order" },
      { href: "#", text: "Start a Return" },
      { href: "#", text: "FAQ" },
      { href: "#", text: "Shipping & Returns Policy" },
      { href: "#", text: "Terms of Service" },
      { href: "#", text: "Privacy Policy" },
    ],
    title: "Customer Care",
  },
  {
    links: [
      { href: "#", text: "About us" },
      { href: "#", text: "Samples" },
      { href: "#", text: "Trade Program" },
      { href: "#", text: "Affiliate Program" },
    ],
    title: "Programs",
  },
];

const socialLinks = [
  { href: "#", icon: <XIcon /> },
  { href: "#", icon: <InstagramIcon /> },
  { href: "#", icon: <FacebookIcon /> },
  { href: "#", icon: <PinterestIcon /> },
];

export default function ContactUs() {
  return (
    <footer className={styles.footer_container}>
      <div className={`${styles.section} ${styles.logo_container}`}>
        <motion.img
          animate={{ opacity: 1, scale: 1 }}
          className={styles.logo_icon}
          drag
          dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
          dragElastic={0.045}
          initial={{ opacity: 0, scale: 0.4 }}
          src={logoIcon}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              damping: 5,
              restDelta: 0.001,
              stiffness: 100,
              type: "spring",
            },
          }}
        />
      </div>
      {sections.map((section, index) => (
        <div className={styles.section} key={index}>
          <h3 className={styles.section_title}>{section.title}</h3>
          <ul className={styles.list}>
            {section.links.map((link, linkIndex) => (
              <li className={styles.list_item} key={linkIndex}>
                <a className={styles.link} href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={styles.section}>
        <h3 className={styles.section_title}>Join our mailing list</h3>
        <form className={styles.newsletter_form}>
          <input className={styles.input} placeholder="Your email" required type="email" />
          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </form>
        <div className={styles.follow_us}>
          {socialLinks.map((social, socialIndex) => (
            <a className={`${styles.social_icon} ${styles.link}`} href={social.href} key={socialIndex}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
