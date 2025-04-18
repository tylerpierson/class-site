import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitThreeWeek4Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-3/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 3 - Week 4 - Day 2: Presentation Day</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Presentation Prep (5–10 minutes)</h2>
          <p>
            Review your project one last time. Make sure your tabs are open, files are saved, and you’re ready to share.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Presentation Tips (10 minutes)</h2>
          <p>
            Practice explaining what your project does, how you built it, and what you’re most proud of.
            Use clear and confident language. Keep it short and sweet!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Project Presentations (Rest of Class)</h2>
          <p>
            Take turns presenting your project to the class. Be respectful, supportive, and give kind feedback.
            Celebrate everyone’s progress and creativity!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up & Reflection</h2>
          <p>
            Write a short reflection: What did you learn during this unit? What are you most proud of? What do you want to try next time?
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitThreeWeek4Day2;
