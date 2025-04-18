import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitTwoWeek1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-2" className={styles.backButton}>
          ← Back to Unit 2 - Weeks
        </Link>

        <h1>Unit 2 - Week 1: Getting Started with JavaScript</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-2/week-1/day-1" className={styles.dayBox}>
            <h2>Day 1: What is JavaScript?</h2>
            <p>Learn how JavaScript can bring websites to life. We’ll talk about how it works with HTML and CSS.</p>
          </Link>
          <Link to="/unit-2/week-1/day-2" className={styles.dayBox}>
            <h2>Day 2: Adding JavaScript to a Page</h2>
            <p>Use the <code>&lt;script&gt;</code> tag to connect JavaScript to your HTML and write your first script!</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitTwoWeek1;