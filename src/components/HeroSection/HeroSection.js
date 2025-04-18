// File: components/HeroSection.jsx
import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Inspire the Next Generation of <span className={styles.span}>Coders</span>
        </h1>
        <p className={styles.para}>
          At Innova, kids aged 7–14 learn coding through interactive lessons, games,
          and real-world projects. Built for young minds. Powered by creativity.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started Free</button>
          <button className={styles.secondaryBtn}>View Curriculum</button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.img} src="/img/coding_tran_graphic.png" alt="Kids learning to code" />
      </div>
    </section>
  );
};

export default HeroSection;

