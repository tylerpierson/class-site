import React from "react";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.textBlock}>
          <h1 className={styles.header}>Innova Is More Than Just Coding</h1>
          <p className={styles.para}>
            We believe coding is the launchpad for young minds. At Innova, students don't just learn code—they build
            confidence, problem-solving skills, and real-world creativity. Our space-themed learning approach makes tech
            fun, engaging, and memorable.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img className={styles.img} src="/img/about-hero.jpg" alt="Student learning with laptop" />
        </div>
      </section>

      <section className={styles.calloutSection}>
        <h2 className={styles.subheader}>Empowering the Next Generation of Digital Creators</h2>
        <p className={styles.para}>
          Whether it’s building their first website, styling it with CSS, or programming interactive behavior with JavaScript,
          students at Innova are gaining real tech skills. These aren't just lessons—they're missions.
        </p>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.founderImage}>
          <img className={styles.img} src="/img/founder.jpg" alt="Innova founder" />
        </div>
        <div className={styles.founderQuote}>
          <p className={styles.quoteMark}>“</p>
          <p className={styles.para}>
            Kids are naturally curious. Our job is to give them tools that let them explore the digital universe in ways
            that are safe, exciting, and rewarding. We don’t just teach code—we unlock potential.
          </p>
          <p className={styles.founderName}>FOUNDER, INNOVA</p>
        </div>
      </section>

      <section className={styles.valuesGrid}>
        <h2 className={styles.centerTitle}>Our Focus</h2>
        <div className={styles.grid}>
          <div className={styles.circleCard}>
            <h3 className={styles.gridHeader}>Hands-On Web Projects</h3>
            <p className={styles.para}>Students learn by doing, building actual websites and apps using HTML, CSS, and JavaScript.</p>
          </div>
          <div className={styles.circleCard}>
            <h3 className={styles.gridHeader}>Exploration with Scratch</h3>
            <p className={styles.para}>Young coders get introduced to logic and animation through playful Scratch-based problem solving.</p>
          </div>
          <div className={styles.circleCard}>
            <h3 className={styles.gridHeader}>AI-Aware Learning</h3>
            <p className={styles.para}>We introduce the basics of generative AI and automation to prepare students for the future.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
