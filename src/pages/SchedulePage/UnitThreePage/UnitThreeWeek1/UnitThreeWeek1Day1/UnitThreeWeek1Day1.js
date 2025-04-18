import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek1Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 3 - Week 1 - Day 1: Brainstorm Ideas</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Favorite Apps and Sites (5–10 minutes)</h2>
          <p>What websites or apps do you use every day? What do you like about them? Let’s get inspired!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: What Can You Build? (10–15 minutes)</h2>
          <p>
            Let’s dream big! Think of a website or app you would love to create.
            <ul>
              <li>What does it do?</li>
              <li>Who is it for?</li>
              <li>What problem does it solve or what fun does it provide?</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Brainstorm List (15 minutes)</h2>
          <p>
            Make a list of 3–5 project ideas. Choose your favorite and explain:
            <ul>
              <li>What is the purpose of this project?</li>
              <li>What will it look like?</li>
              <li>What features might it have?</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (15–20 minutes)</h2>
          <p>
            Start drawing a quick sketch of your favorite idea. Add notes about colors, pages, and features.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Tomorrow, you'll take your favorite idea and turn it into a project outline. Get ready to plan it out!</p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek1Day1;
