import React from "react";
import styles from "./EducatorDashboard.module.scss";

const EducatorDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Welcome, Educator</h1>
        <p>Manage your students, lessons, and track class performance.</p>
      </div>

      <div className={styles.sections}>
        <div className={styles.card}>
          <h2>Student Progress</h2>
          <p>View and filter progress by student, quiz, or unit.</p>
          <a href="/educator/students" className={styles.button}>View Students</a>
        </div>

        <div className={styles.card}>
          <h2>Lesson Planner</h2>
          <p>Adjust pacing, unlock lessons, or preview upcoming content.</p>
          <a href="/educator/lessons" className={styles.button}>Manage Lessons</a>
        </div>

        <div className={styles.card}>
          <h2>Certificates & Quizzes</h2>
          <p>Review quiz results and issue certificates of completion.</p>
          <a href="/educator/certificates" className={styles.button}>Certificates Panel</a>
        </div>
      </div>
    </div>
  );
};

export default EducatorDashboard;