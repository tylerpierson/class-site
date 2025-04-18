import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitTwoWeek3Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-2/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 2 - Week 3 - Day 2: Events</h1>

        <section className={styles.lessonSection}>
          <h2>Warm-Up: Click It! (5–10 minutes)</h2>
          <p>Talk about all the ways you interact with a computer—clicking, typing, dragging. Which ones could trigger something?</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Lesson: Event Listeners (15–20 minutes)</h2>
          <p>
            JavaScript lets your page react to actions using event listeners!
            <br /><br />
            Example:
            <pre><code>
document.getElementById("myButton").addEventListener("click", function() &#123;<br />
&nbsp;&nbsp;alert("Button clicked!");<br />
&#125;);</code></pre>
            You can listen for clicks, keypresses, mouseovers, and more.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Guided Practice (15 minutes)</h2>
          <ul>
            <li>Make a button that logs a message when clicked</li>
            <li>Make a text box that logs what you type using <code>keydown</code></li>
            <li>Use <code>mouseover</code> to change a color or image</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Independent Practice (10–15 minutes)</h2>
          <p>Create your own webpage with 2 different event listeners that each trigger something cool!</p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up</h2>
          <p>Now your pages can respond to users! Great job adding interactivity to your site.</p>
        </section>
      </div>
    </>
  );
}

export default UnitTwoWeek3Day2;
