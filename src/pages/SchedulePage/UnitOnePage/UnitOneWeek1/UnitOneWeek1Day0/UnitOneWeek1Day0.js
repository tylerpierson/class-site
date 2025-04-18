import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek1Day0() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-1" className={styles.backButton}>
          ← Back to Week 1
        </Link>
        <h1>Unit 1 - Week 1 - Day 0: Introduction & Setup</h1>

        <section className={styles.lessonSection}>
          <h2>Introduction to Web Development (5-10 minutes)</h2>
          <p>
            Welcome to the beginning of your web development journey! In this session, we’ll set up the necessary tools to get started.
          </p>
          <p>
            First, let’s install a good <strong>IDE (Integrated Development Environment)</strong>. The most popular one for web developers is <strong>VSCode</strong>, which is free and packed with helpful features like syntax highlighting, code completion, and extensions.
          </p>
          <p>
            Download and install VSCode from here: <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode Official Site</a>
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Exploring CodePen (10-15 minutes)</h2>
          <p>
            While you’re setting up your development environment, try experimenting with coding directly in your browser using a platform like <strong>CodePen</strong>.
          </p>
          <p>
            CodePen allows you to write and test HTML, CSS, and JavaScript in real time. It's a great way to start practicing without needing to set up a local project yet.
          </p>
          <p>
            Visit <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">CodePen</a> and create an account to begin experimenting.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Setting Up VSCode (15-20 minutes)</h2>
          <p>
            Once you have VSCode installed, it’s time to configure it for web development.
          </p>
          <ul>
            <li>Open VSCode and install extensions for <strong>HTML</strong> and <strong>CSS</strong> to get syntax highlighting and auto-completion.</li>
            <li>Create and save files with the <code>.html</code> and <code>.css</code> extensions. These files will hold the code for your webpages.</li>
            <li>Learn how to open an integrated terminal in VSCode to run simple commands and see your project in action.</li>
          </ul>
        </section>

        <section className={styles.lessonSection}>
          <h2>Next Steps (5 minutes)</h2>
          <p>
            Now that you've installed the tools and explored CodePen, you're ready to start writing HTML on Day 1! Tomorrow, we’ll dive into creating your first webpage.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek1Day0;
