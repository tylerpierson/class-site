import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek4Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-4" className={styles.backButton}>
          ← Back to Week 4
        </Link>
        <h1>Unit 1 - Week 4 - Day 1: Planning Your Page</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Explore Example Sites (5–10 minutes)</h2>
          <p>
            Look at a few simple personal or portfolio-style websites. What sections do they include? What kind of colors and fonts do they use?
            Share your observations with the class.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Project Brainstorm & Sketch (15–20 minutes)</h2>
          <ul>
            <li>Think about what kind of webpage you want to build. Will it be about you? A topic you love? A hobby?</li>
            <li>Draw a simple wireframe sketch of your page layout on paper or digitally.</li>
            <li>Include elements like a header, intro paragraph, images, links, or sections with info.</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Plan Your HTML & CSS (15–20 minutes)</h2>
          <ul>
            <li>List out what HTML tags you'll use — like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;img&gt;</code>.</li>
            <li>Think about what styles you'll add with CSS — colors, fonts, borders, spacing, etc.</li>
            <li>If you're using a design tool like CodePen or VSCode, start a file with some placeholder content.</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>
            Get feedback from a peer or teacher on your plan. Tomorrow you'll start building your project!
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek4Day1;
