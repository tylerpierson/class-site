import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek1Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 1 - Week 1 - Day 1: What is HTML?</h1>

        <section className={styles.lessonSection}>
          <h2>Welcome! (5-10 minutes)</h2>
          <p>
            Today is our first day learning how to build websites! 🎉 We’ll start by learning the foundation of all web pages: <strong>HTML</strong>.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>What is HTML? (10-15 minutes)</h2>
          <p>
            HTML stands for <strong>HyperText Markup Language</strong>. It’s used to create the structure and content of a webpage.
          </p>
          <p>
            Think of HTML as the bones of a website. It tells the browser what each part of the content is: headings, paragraphs, images, links, etc.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Basic Tags (15-20 minutes)</h2>
          <p>Here are a few common HTML tags:</p>
          <ul>
            <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> — Headings</li>
            <li><code>&lt;p&gt;</code> — Paragraph</li>
            <li><code>&lt;a&gt;</code> — Link</li>
            <li><code>&lt;img&gt;</code> — Image</li>
            <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> — Lists</li>
          </ul>
          <p>Example:</p>
          <pre>
            {`<h1>Welcome to My Website!</h1>
<p>This is my first web page.</p>`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Activity (15-20 minutes)</h2>
          <p>
            Open a new file and save it as <code>index.html</code>. Use HTML tags to add:
          </p>
          <ul>
            <li>A heading</li>
            <li>A short paragraph</li>
            <li>A link to your favorite website</li>
            <li>An image (use one from the internet)</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up (5 minutes)</h2>
          <p>
            Great job! You just created your first webpage using HTML. Tomorrow, we’ll learn how to build a full webpage with structure and sections.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek1Day1;
