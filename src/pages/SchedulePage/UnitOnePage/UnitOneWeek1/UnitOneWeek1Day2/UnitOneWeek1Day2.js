import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek1Day2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 1 - Week 1 - Day 2: Building a Basic Webpage</h1>

        <section className={styles.lessonSection}>
          <h2>Review from Yesterday (5-10 minutes)</h2>
          <p>
            Let’s review the tags we learned yesterday: headings, paragraphs, images, and links. Can you remember what each one does?
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>HTML Page Structure (10-15 minutes)</h2>
          <p>
            Every full HTML page needs a structure like this:
          </p>
          <pre>
            {`<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>I'm learning HTML.</p>
  </body>
</html>`}
          </pre>
          <p>
            The <code>&lt;head&gt;</code> contains meta info and the title. The <code>&lt;body&gt;</code> contains what the user actually sees.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Building Your Webpage (15-20 minutes)</h2>
          <p>
            Now build a complete webpage using the full structure! Add:
          </p>
          <ul>
            <li>A title in the <code>&lt;head&gt;</code></li>
            <li>Several headings and paragraphs in the body</li>
            <li>At least one image</li>
            <li>One or more links</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Styling Preview (Optional)</h2>
          <p>
            Want to go further? Try adding the <code>style</code> attribute to change the color of your text!
          </p>
          <pre>
            {`<h1 style="color: green;">Green Heading</h1>`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up (5 minutes)</h2>
          <p>
            Now you’ve built your first structured webpage! Tomorrow, we’ll start learning how to make it look amazing using CSS.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek1Day2;
