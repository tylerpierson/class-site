import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitOneWeek2() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-1" className={styles.backButton}>
          ← Back to Unit 1 - Weeks
        </Link>
        <h1>Unit 1 - Week 2: Introduction to CSS</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-1/week-2/day-1" className={styles.dayBox}>
            <h2>Day 1: What is CSS?</h2>
            <p>Learn how CSS is used to style your HTML pages. We'll cover colors, fonts, and sizes.</p>
          </Link>
          <Link to="/unit-1/week-2/day-2" className={styles.dayBox}>
            <h2>Day 2: Styling Your Webpage</h2>
            <p>Add some style to the page you built last week using CSS rules and selectors.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitOneWeek2;