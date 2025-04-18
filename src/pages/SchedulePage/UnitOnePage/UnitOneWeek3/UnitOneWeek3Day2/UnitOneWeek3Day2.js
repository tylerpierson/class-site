import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek3Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 1 - Week 3 - Day 2: Making It Mobile-Friendly</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Why Mobile Matters (5–10 minutes)</h2>
          <p>
            Pull up a website on your phone and compare it to how it looks on a computer.
            What differences do you notice? Talk as a class about what makes a site user-friendly on mobile.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Intro to Media Queries (15–20 minutes)</h2>
          <p>
            Today you'll learn about <strong>media queries</strong>, which allow your CSS to respond to different screen sizes.
            This is a big part of something called <em>responsive design</em>.
          </p>
          <p>Example:</p>
          <pre>
{`@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
          </pre>
          <p>
            This changes the background color only if the screen is less than 600px wide — perfect for phones!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Activity: Test & Tweak Your Page (20–25 minutes)</h2>
          <ul>
            <li>Open your HTML and CSS from last week.</li>
            <li>Use your browser’s DevTools to view your page on different screen sizes.</li>
            <li>Add at least one media query to adjust layout, font size, or spacing for small screens.</li>
          </ul>
          <p>
            Try resizing the window to see your media query in action. Mobile-first design helps make your pages usable for everyone!
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up (5 minutes)</h2>
          <p>
            Share your progress with a partner or in breakout groups. Tomorrow we’ll wrap up Week 3 with some review and a small project!
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek3Day2;
