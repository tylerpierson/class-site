import React from "react";
import styles from "./StudentDashboard.module.scss";

const StudentDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Welcome to Your Dashboard</h1>
        <p>Explore your lessons, check progress, and track upcoming assignments.</p>
      </div>

      <div className={styles.sections}>
        <div className={styles.card}>
          <h2>Current Lesson</h2>
          <p>You're on <strong>Week 3, Day 2</strong>: JavaScript Variables & Logic</p>
          <a href="/courses/week-3/day-2" className={styles.button}>Continue Lesson</a>
        </div>

        <div className={styles.card}>
          <h2>Upcoming Quiz</h2>
          <p>Next quiz: <strong>Week 3 Quiz</strong></p>
          <p>Due: <strong>Friday</strong></p>
        </div>

        <div className={styles.card}>
          <h2>Certificates</h2>
          <p>You’ve earned <strong>1 certificate</strong> so far. Keep going!</p>
          <a href="/certificates" className={styles.button}>View Certificates</a>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
