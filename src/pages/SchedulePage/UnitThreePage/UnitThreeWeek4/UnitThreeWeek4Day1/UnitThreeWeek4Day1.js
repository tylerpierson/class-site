import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek4Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 3 - Week 4 - Day 1: Final Touches</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Project Self-Review (5–10 minutes)</h2>
          <p>
            Open your project and look at it as a new user. Write down three things you think could be improved.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Debugging and Clean Code (15–20 minutes)</h2>
          <p>
            Learn tips for finding and fixing bugs. Check your code for extra spaces, console logs, and messy formatting.
            Review naming conventions and make sure your file structure makes sense.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Polishing (15–20 minutes)</h2>
          <p>
            Work with a partner or instructor to identify final changes. Use a checklist to make sure everything is styled, working, and ready to go.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Update your project based on feedback and your own review. Add any missing features, fix broken links, and clean up your CSS.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            You’re almost there! Tomorrow is your time to shine. Get ready to present your hard work with confidence.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek4Day1;
