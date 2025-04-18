import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek1Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 2 - Week 1 - Day 1: What is JavaScript?</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: What Do You Already Know? (5–10 minutes)</h2>
          <p>
            Talk with a partner or journal your answers:
            <ul>
              <li>What do you think JavaScript is used for?</li>
              <li>How might it be different from HTML and CSS?</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Introducing JavaScript (15–20 minutes)</h2>
          <p>
            JavaScript is the language that lets you add interactivity to your web pages! It can:
            <ul>
              <li>Change what's on the screen based on user actions</li>
              <li>Do math and store information</li>
              <li>Respond to things like button clicks or key presses</li>
            </ul>
            We'll learn how JavaScript works with HTML and CSS as a trio of technologies.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Real-Life Examples (10–15 minutes)</h2>
          <p>Explore a few websites together and point out features likely built with JavaScript (pop-ups, image sliders, form validation, etc.).</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Work: JavaScript in Action (10–15 minutes)</h2>
          <p>
            Look at simple examples of code and match them to what they do on a page.
            You might also try small interactive playgrounds like JSFiddle or CodePen.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            Share one thing you’re excited to build with JavaScript. Tomorrow we’ll add our first script to a webpage!
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek1Day1;
