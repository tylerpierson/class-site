// File: components/Footer.jsx
import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img className={styles.img} src="/img/logo_1.png" alt="Innova Logo" />
        </div>

        <nav className={styles.links}>
            <Link
                className={styles.link}
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                Home
            </Link>
            <Link className={styles.link} to="#">Courses</Link>
            <Link className={styles.link} to="#">Support</Link>
            <Link className={styles.link} to="/about">About Us</Link>
        </nav>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Innova Coding. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
