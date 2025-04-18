import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek4Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 1 - Week 4 - Day 2: Building & Sharing</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Review Your Plan (5–10 minutes)</h2>
          <p>
            Take out your wireframe or notes from yesterday. Are there any last-minute changes you want to make before coding?
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Start Building! (30–35 minutes)</h2>
          <ul>
            <li>Use your HTML and CSS skills to build your webpage.</li>
            <li>Remember to organize your code clearly using indentation and comments.</li>
            <li>Add as much detail and style as you'd like—this is your time to show off what you've learned!</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Peer Sharing (10–15 minutes)</h2>
          <p>
            When you're ready, show your webpage to a classmate. Ask for feedback:
            <ul>
              <li>Is the layout clear?</li>
              <li>Do the styles match your theme?</li>
              <li>Anything confusing or missing?</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up: Reflect & Celebrate</h2>
          <p>
            You've created your first webpage from scratch! Reflect on what you learned this unit and what you're excited to build next.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek4Day2;
