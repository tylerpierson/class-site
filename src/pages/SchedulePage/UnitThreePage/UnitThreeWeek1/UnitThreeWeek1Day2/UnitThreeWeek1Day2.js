import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek1Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 3 - Week 1 - Day 2: Project Outline</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Quick Share (5–10 minutes)</h2>
          <p>Share your favorite project idea from yesterday with a partner or group. What are you excited to build?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: What Goes Into a Project? (10–15 minutes)</h2>
          <p>
            Projects are made up of:
            <ul>
              <li><strong>Pages</strong> (like Home, About, Contact)</li>
              <li><strong>Features</strong> (like buttons, forms, animations)</li>
              <li><strong>Styles</strong> (colors, fonts, layout)</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Create a Project Outline (20 minutes)</h2>
          <p>
            Make a chart or bullet list that includes:
            <ul>
              <li>Page Names</li>
              <li>What will go on each page</li>
              <li>What features each page will include</li>
              <li>Any fun or interactive ideas</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Finalize your outline. You can start writing the HTML structure of your pages if you have time.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Great work! You now have a solid plan. Next week, we’ll start building your project step by step.</p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek1Day2;
