import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek3Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 3 - Week 3 - Day 1: JavaScript Features</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Where Have You Seen JavaScript? (5–10 minutes)</h2>
          <p>Think about websites you use every day. Where do you see buttons, popups, or interactive elements?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: JavaScript for Interaction (15–20 minutes)</h2>
          <p>
            Review how JavaScript helps us respond to user actions like clicks and typing.
            Practice writing simple <code>event listeners</code> to show messages, change styles, or move elements.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Add a Button Feature (15–20 minutes)</h2>
          <p>
            Add a button to one of your pages that shows a message, changes a color, or hides/shows something.
            Use <code>document.querySelector()</code> and <code>addEventListener()</code> to make it work!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Think about how you want your site to interact with the user. Add JavaScript features to make it more fun or useful!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            You’ve added life to your project! Tomorrow you’ll make it even smoother and more exciting with animations and transitions.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek3Day1;
