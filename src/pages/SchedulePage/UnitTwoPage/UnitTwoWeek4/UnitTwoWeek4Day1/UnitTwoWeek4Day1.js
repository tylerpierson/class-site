import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek4Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 2 - Week 4 - Day 1: Plan Your Game</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Favorite Games (5–10 minutes)</h2>
          <p>What games do you love to play? What makes them fun? Talk about the features and design of your favorite games.</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Game Planning (15–20 minutes)</h2>
          <p>
            Today, you're the game designer! Think about:
            <ul>
              <li>What kind of game do you want to make? (Clicking game, guessing game, reaction game?)</li>
              <li>What should the player do to win?</li>
              <li>What buttons, sounds, and visuals will you need?</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice: Game Map (15 minutes)</h2>
          <p>
            Create a quick game map on paper or digitally:
            <ul>
              <li>Draw your game's layout</li>
              <li>Label buttons, scores, characters, etc.</li>
              <li>Plan out which parts need HTML, CSS, or JavaScript</li>
            </ul>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (10–15 minutes)</h2>
          <p>
            Start setting up your HTML and CSS. Add a title, create buttons or a play area, and think about your color theme.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            You're on your way to building a game! Tomorrow, you'll use JavaScript to make it come alive.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek4Day1;
