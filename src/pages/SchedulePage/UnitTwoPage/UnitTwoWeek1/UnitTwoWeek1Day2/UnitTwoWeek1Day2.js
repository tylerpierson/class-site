import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek1Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 2 - Week 1 - Day 2: Adding JavaScript to a Page</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: JavaScript Pop Quiz (5 minutes)</h2>
          <p>Answer a few quick review questions about what JavaScript does!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Connecting JavaScript with HTML (15–20 minutes)</h2>
          <p>
            Learn how to use the <code>&lt;script&gt;</code> tag to run JavaScript in an HTML file. Try adding a script that prints a message using:
          </p>
          <pre><code>console.log("Hello, world!");</code></pre>
          <p>
            Talk about where to place the script tag — in the head, body, or linked externally.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Your First Script (15–20 minutes)</h2>
          <ul>
            <li>Create a simple HTML page</li>
            <li>Add a script tag</li>
            <li>Write a <code>console.log()</code> message</li>
            <li>Open DevTools and find the message!</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15 minutes)</h2>
          <p>
            Try writing 2–3 more console messages about your day or interests. Use comments to explain what’s happening.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            You’ve added JavaScript to a webpage! Tomorrow we’ll learn about **variables** and how they help store data.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek1Day2;
