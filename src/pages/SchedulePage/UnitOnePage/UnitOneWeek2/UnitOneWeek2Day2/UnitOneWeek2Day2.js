import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek2Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-2" className={styles.backButton}>
          ← Back to Week 2
        </Link>
        <h1>Unit 1 - Week 2 - Day 2: Styling Your Webpage</h1>

        <section className={styles.lessonSection}>
          <h2>Review and Setup (5-10 minutes)</h2>
          <p>
            Let’s review what we learned about CSS yesterday. Open the HTML file you created last week.
          </p>
          <p>
            Today, you’ll apply real CSS to your webpage using an external stylesheet.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Linking a CSS File (5-10 minutes)</h2>
          <p>
            Create a new file called <code>styles.css</code> and link it in your HTML head:
          </p>
          <pre>
            {`<link rel="stylesheet" href="styles.css" />`}
          </pre>
          <p>
            Now any styles in <code>styles.css</code> will apply to your HTML file.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Apply CSS to Your Page (15-20 minutes)</h2>
          <p>
            Add CSS to style your heading, paragraph, and links. Try experimenting with:
          </p>
          <ul>
            <li>Text colors and font families</li>
            <li>Padding and margin spacing</li>
            <li>Hover effects for links</li>
            <li>Custom background color</li>
          </ul>

          <pre>
            {`body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: darkblue;
}

a:hover {
  color: red;
}`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Explore More Styling (10-15 minutes)</h2>
          <p>
            Use a <code>div</code> to group related content and apply borders or background styles. This is great for creating sections.
          </p>
          <p>
            Try centering content with <code>text-align</code> or adding a border radius to round corners.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up and Reflection (5 minutes)</h2>
          <p>
            Now your webpage looks much better! Continue experimenting with CSS to explore your personal style. Next week, we’ll dive into layouts and responsive design!
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek2Day2;
