// File: components/Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src="/img/logo_1.png" alt="Innova Logo" />
        </div>

        <nav className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Support</a>
          <a href="#">About Us</a>
        </nav>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Innova Coding. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
