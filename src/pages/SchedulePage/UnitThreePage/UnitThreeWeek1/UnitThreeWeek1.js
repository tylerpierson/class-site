import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitThreeWeek1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-3" className={styles.backButton}>
          ← Back to Unit 3 - Weeks
        </Link>

        <h1>Unit 3 - Week 1: Project Planning</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-3/week-1/day-1" className={styles.dayBox}>
            <h2>Day 1: Brainstorm Ideas</h2>
            <p>Think about what kind of website or app you want to build. Get creative!</p>
          </Link>
          <Link to="/unit-3/week-1/day-2" className={styles.dayBox}>
            <h2>Day 2: Project Outline</h2>
            <p>Map out the pages, features, and styles your project will include.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitThreeWeek1;