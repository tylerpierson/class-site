import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitOneWeek3() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-1" className={styles.backButton}>
          ← Back to Unit 1 - Weeks
        </Link>
        <h1>Unit 1 - Week 3: Responsive Design</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-1/week-3/day-1" className={styles.dayBox}>
            <h2>Day 1: Layouts and Flexbox</h2>
            <p>Learn how to arrange elements on a page using containers, rows, and columns with Flexbox.</p>
          </Link>
          <Link to="/unit-1/week-3/day-2" className={styles.dayBox}>
            <h2>Day 2: Making It Mobile-Friendly</h2>
            <p>Test how your site looks on phones and tablets, and learn how to adjust it using CSS media queries.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitOneWeek3;