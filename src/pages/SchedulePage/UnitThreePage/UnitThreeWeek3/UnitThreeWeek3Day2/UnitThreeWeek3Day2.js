import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek3Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 3 - Week 3 - Day 2: Enhancing User Experience</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: What Makes a Website Fun to Use? (5–10 minutes)</h2>
          <p>Talk about hover effects, smooth transitions, and animations you’ve seen on other websites.</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: CSS Transitions and JS Animations (15–20 minutes)</h2>
          <p>
            Learn how to use <code>transition</code> and <code>transform</code> in CSS to create smooth changes.
            Then explore simple JavaScript animations using <code>setInterval</code> or <code>classList.toggle</code>.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Add an Animation (15–20 minutes)</h2>
          <p>
            Pick one element (like an image or box) and make it animate when clicked or hovered over.
            Experiment with <code>scale</code>, <code>rotate</code>, or <code>fade-in</code> effects!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Add at least two user experience improvements to your project.
            These could be hover effects, animated popups, sliding menus, or smooth scroll behavior.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            Amazing work — your project now interacts and responds beautifully. Next, you’ll polish and prepare to present!
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek3Day2;
