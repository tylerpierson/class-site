import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek2Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 2 - Week 2 - Day 2: Writing Functions</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: What’s a Reusable Action? (5–10 minutes)</h2>
          <p>Think of something you do every day—can you write a step-by-step list for it? (Brushing teeth, making cereal, etc.)</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: What Are Functions? (15–20 minutes)</h2>
          <p>
            A function is a reusable block of code. You write it once and use (or "call") it many times!
            <pre><code>
function sayHello() &#123;<br />
&nbsp;&nbsp;console.log("Hello, world!");<br />
&#125;

sayHello();</code></pre>
            You can also pass information into functions using parameters.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice (15 minutes)</h2>
          <ul>
            <li>Write a function that logs your favorite hobby</li>
            <li>Write another that takes a name and says hello</li>
            <li>Try calling each function more than once!</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (10–15 minutes)</h2>
          <p>Make 2 small functions: one with no parameters and one with parameters. Practice calling them in different ways!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Nice job writing your first functions! Next time, we’ll learn how to use conditionals to make decisions in our code.</p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek2Day2;
