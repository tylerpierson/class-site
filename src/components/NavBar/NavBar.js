import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const notHome = location.pathname !== "/";
      setScrolled(window.scrollY > 60 || notHome);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load and route change

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.shrink : ""}`}>
      <img
        src="/img/logo_tran_1.png"
        alt="Innova Logo"
        className={`${styles.logoImg} ${scrolled ? styles.logoShrink : ""}`}
      />

      <nav className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/courses" className={styles.link}>Courses</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </nav>

      <div className={styles.authButtons}>
        <Link to="/auth" className={styles.loginBtn}>Login</Link>
        <Link to="/auth" className={styles.signupBtn}>Sign Up</Link>
      </div>
    </header>
  );
};

export default NavBar;
