import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitTwoWeek2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-2" className={styles.backButton}>
          ← Back to Unit 2 - Weeks
        </Link>

        <h1>Unit 2 - Week 2: Fun with Variables & Functions</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-2/week-2/day-1" className={styles.dayBox}>
            <h2>Day 1: Using Variables</h2>
            <p>Store and reuse information with <code>let</code> and <code>const</code>. We’ll try out some fun examples!</p>
          </Link>
          <Link to="/unit-2/week-2/day-2" className={styles.dayBox}>
            <h2>Day 2: Writing Functions</h2>
            <p>Create reusable blocks of code with functions, and call them to make your page do cool things.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitTwoWeek2;