import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek2Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 3 - Week 2 - Day 2: Add Basic Styling</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: What Makes a Site Look Good? (5–10 minutes)</h2>
          <p>Talk about your favorite websites. What colors, fonts, and layouts do they use?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: CSS Basics Refresher (10–15 minutes)</h2>
          <p>
            Review how to link a CSS file and use basic properties like:
            <ul>
              <li><code>color</code>, <code>background-color</code></li>
              <li><code>font-family</code>, <code>text-align</code></li>
              <li><code>padding</code>, <code>margin</code>, <code>border</code></li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Style One Page (20 minutes)</h2>
          <p>
            Pick one page and add styles to your headers, text, and images. Try using class and id selectors to organize your CSS.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Apply styling to your other pages. Make sure your site has a consistent look and feel.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Nice job bringing your site to life! Next week you’ll add interactivity using JavaScript.</p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek2Day2;
