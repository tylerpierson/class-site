import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek4Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 2 - Week 4 - Day 2: Build & Play!</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Game Sharing Circle (5–10 minutes)</h2>
          <p>Share your game idea with a classmate or partner. What are you most excited to build?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Putting It Together (15–20 minutes)</h2>
          <p>
            Now it’s time to make your game real! Use everything you’ve learned:
            <ul>
              <li><strong>HTML</strong> to create the structure</li>
              <li><strong>CSS</strong> to style your page</li>
              <li><strong>JavaScript</strong> for interactivity and logic</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Build: Start with One Feature (15 minutes)</h2>
          <p>
            Start by making just one thing work (like a button that adds a point). Then, add more step-by-step.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Build & Playtest (15–20 minutes)</h2>
          <p>
            Build as much of your game as you can! Try it out, test it, and show it off.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up: Game Showcase</h2>
          <p>Share your game with friends or classmates! Talk about what you’re proud of and what you want to add next.</p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek4Day2;
