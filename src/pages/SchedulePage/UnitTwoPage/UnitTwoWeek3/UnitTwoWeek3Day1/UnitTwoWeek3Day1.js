import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek3Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 2 - Week 3 - Day 1: Loops</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Repeating Patterns (5–10 minutes)</h2>
          <p>Think of something you repeat every day. How many times do you do it? Write it out like a list!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Intro to Loops (15–20 minutes)</h2>
          <p>
            Loops help you run the same code multiple times.
            <br /><br />
            A <code>for</code> loop runs a certain number of times:
            <pre><code>for (let i = 0; i &lt; 5; i++) &#123;<br />&nbsp;&nbsp;console.log("Hi!");<br />&#125;</code></pre>
            A <code>while</code> loop runs as long as a condition is true:
            <pre><code>let count = 0;<br />while (count &lt; 5) &#123;<br />&nbsp;&nbsp;console.log("Hello!");<br />&nbsp;&nbsp;count++;<br />&#125;</code></pre>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice (15 minutes)</h2>
          <ul>
            <li>Write a <code>for</code> loop that counts from 1 to 10</li>
            <li>Write a <code>while</code> loop that counts down from 5</li>
            <li>Use a loop to log each item in an array</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (10–15 minutes)</h2>
          <p>Create a loop that prints your name 3 times and another that counts up by 2s to 10.</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Loops save time by letting you repeat code. Tomorrow, you’ll learn how to make your site react to user input!</p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek3Day1;
