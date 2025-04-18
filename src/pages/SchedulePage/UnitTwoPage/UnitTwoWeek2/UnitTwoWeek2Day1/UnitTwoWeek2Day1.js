import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek2Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 2 - Week 2 - Day 1: Using Variables</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Favorite Things (5–10 minutes)</h2>
          <p>Write a list of 3–5 of your favorite things. You’ll turn these into variables today!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: What Are Variables? (15–20 minutes)</h2>
          <p>
            Variables store information we can reuse. In JavaScript, we use <code>let</code> and <code>const</code> to make them.
            Example:
            <pre><code>let name = "Taylor";<br />const age = 12;</code></pre>
            Talk about the difference between <code>let</code> (can change) and <code>const</code> (stays the same).
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Make Some Variables (15 minutes)</h2>
          <ul>
            <li>Use <code>let</code> and <code>const</code> to store favorite food, number, or color</li>
            <li>Log them using <code>console.log()</code></li>
            <li>Try changing a <code>let</code> value and logging again</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (10–15 minutes)</h2>
          <p>Write a small story using variables (name, place, favorite snack) and log it with string concatenation or template literals.</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Today you learned how to store data using variables. Tomorrow, we’ll reuse that data with functions!</p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek2Day1;
