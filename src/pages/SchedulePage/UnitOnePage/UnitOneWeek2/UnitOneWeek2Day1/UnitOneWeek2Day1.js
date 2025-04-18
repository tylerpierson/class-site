import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek2Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 1 - Week 2 - Day 1: What is CSS?</h1>

        <section className={styles.lessonSection}>
          <h2>Intro to CSS (5-10 minutes)</h2>
          <p>
            CSS stands for <strong>Cascading Style Sheets</strong>. It’s a language used to describe the style of an HTML document—how elements should appear visually on the screen.
          </p>
          <p>
            HTML is the structure, and CSS is the design. Together, they make web pages both functional and beautiful.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Why Do We Use CSS? (5-10 minutes)</h2>
          <p>
            CSS allows you to control:
          </p>
          <ul>
            <li>Colors</li>
            <li>Fonts and text sizes</li>
            <li>Spacing and margins</li>
            <li>Layouts and positioning</li>
            <li>Animations and effects</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>How to Add CSS (10-15 minutes)</h2>
          <p>There are 3 main ways to add CSS:</p>
          <ol>
            <li><strong>Inline</strong> – inside an HTML tag</li>
            <li><strong>Internal</strong> – within a <code>&lt;style&gt;</code> tag in your HTML head</li>
            <li><strong>External</strong> – by linking a separate .css file</li>
          </ol>

          <p><strong>Example of Internal CSS:</strong></p>
          <pre>
            {`<style>
  h1 {
    color: blue;
    font-size: 36px;
  }
</style>`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Selectors and Properties (15-20 minutes)</h2>
          <p>
            A CSS rule is made of a <strong>selector</strong> and a <strong>declaration block</strong>.
          </p>
          <pre>
            {`p {
  color: red;
  font-size: 18px;
}`}
          </pre>
          <p>
            In this example, <code>p</code> is the selector. The declarations inside the curly braces define how paragraph elements should look.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Practice Time! (20-25 minutes)</h2>
          <p>
            Try styling a simple webpage with CSS. Change the background color, modify heading text size, and adjust paragraph spacing.
          </p>
          <p>
            Explore using <code>color</code>, <code>font-family</code>, <code>margin</code>, and <code>padding</code> in your styles.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up (5 minutes)</h2>
          <p>
            Today, we explored what CSS is and how it allows us to style HTML elements. Tomorrow, we’ll put these concepts into practice by styling the webpage you created last week.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek2Day1;
