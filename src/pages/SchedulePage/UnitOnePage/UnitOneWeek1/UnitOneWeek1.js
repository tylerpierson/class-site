import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitOneWeek1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-1" className={styles.backButton}>
          ← Back to Unit 1 - Weeks
        </Link>
        <h1>Unit 1 - Week 1: Basics of HTML</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-1/week-1/day-0" className={styles.dayBox}>
            <h2>Day 0: Introduction & Setup</h2>
            <p>In this day, we will set up our development environment by installing the necessary tools like <strong>VSCode</strong> and exploring websites like <strong>CodePen</strong> for hands-on coding.</p>
          </Link>
          <Link to="/unit-1/week-1/day-1" className={styles.dayBox}>
            <h2>Day 1: What is HTML?</h2>
            <p>Learn what HTML stands for and how it's used to build websites. We'll explore common tags like <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;a&gt;</code>.</p>
          </Link>
          <Link to="/unit-1/week-1/day-2" className={styles.dayBox}>
            <h2>Day 2: Building Your First Webpage</h2>
            <p>Create your very first webpage using HTML! Add a title, headings, paragraphs, and links.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitOneWeek1;
