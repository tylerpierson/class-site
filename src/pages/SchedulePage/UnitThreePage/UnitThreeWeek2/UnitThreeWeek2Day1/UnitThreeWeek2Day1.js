import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek2Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 3 - Week 2 - Day 1: Create the HTML Foundation</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: What Does HTML Do? (5–10 minutes)</h2>
          <p>Discuss how HTML provides the skeleton or foundation of every website. What tags do you remember?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Planning Your HTML (10–15 minutes)</h2>
          <p>
            Think about your project’s layout. What pages are you building? What sections go on each page?
            Use semantic tags like <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Create Your HTML (20 minutes)</h2>
          <p>
            Open your code editor and begin writing the HTML structure for your homepage. Add headings, text, and images as needed.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Build out your remaining pages using consistent structure. Double check for:
            <ul>
              <li>Proper indentation</li>
              <li>Closed tags</li>
              <li>Meaningful content</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Awesome job laying the foundation! Tomorrow, you’ll start bringing your design to life with CSS.</p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek2Day1;
