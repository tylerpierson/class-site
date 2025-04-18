import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitThreeWeek2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-3" className={styles.backButton}>
          ← Back to Unit 3 - Weeks
        </Link>

        <h1>Unit 3 - Week 2: Building the Structure</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-3/week-2/day-1" className={styles.dayBox}>
            <h2>Day 1: Create the HTML Foundation</h2>
            <p>Start building the structure of your project using HTML elements.</p>
          </Link>
          <Link to="/unit-3/week-2/day-2" className={styles.dayBox}>
            <h2>Day 2: Add Basic Styling</h2>
            <p>Use CSS to begin styling your project and bring it to life.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitThreeWeek2;