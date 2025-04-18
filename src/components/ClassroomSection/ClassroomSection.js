// File: components/ClassroomSection.jsx
import React from "react";
import styles from "./ClassroomSection.module.scss";

const ClassroomSection = () => {
  return (
    <section className={styles.classroom}>
      <div className={styles.image}>
        <img src="/img/planet_tran_graphic.png" alt="Kids coding together" />
      </div>
      <div className={styles.content}>
        <h2>Everything a Classroom Offers — <span>Online</span></h2>
        <p>
          Innova’s virtual classroom combines structure with freedom. Teachers guide students through challenges, projects, and live help — all in one friendly platform.
        </p>
        <button className={styles.learnMoreBtn}>Explore the Learning Experience</button>
      </div>
    </section>
  );
};

export default ClassroomSection;
