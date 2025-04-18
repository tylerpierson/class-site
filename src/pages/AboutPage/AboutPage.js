import React from "react";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.header}>Innova Is More Than Just Coding</h1>
        <p className={styles.intro}>
          We believe coding is the launchpad for young minds. At Innova, students don't just learn code—they build
          confidence, problem-solving skills, and real-world creativity. Our space-themed learning approach makes tech
          fun, engaging, and memorable.
        </p>

        <div className={styles.values}>
          <div className={styles.card}>
            <h3 className={styles.subheader}>Hands-On Web Projects</h3>
            <p className={styles.para}>
              Students learn by doing, building actual websites and apps using HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.subheader}>Exploration with Scratch</h3>
            <p className={styles.para}>
              Young coders get introduced to logic and animation through playful Scratch-based problem solving.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.subheader}>AI-Aware Learning</h3>
            <p className={styles.para}>
              We introduce the basics of generative AI and automation to prepare students for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;