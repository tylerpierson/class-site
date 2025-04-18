import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitTwoWeek3() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-2" className={styles.backButton}>
          ← Back to Unit 2 - Weeks
        </Link>

        <h1>Unit 2 - Week 3: Loops & Events</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-2/week-3/day-1" className={styles.dayBox}>
            <h2>Day 1: Loops</h2>
            <p>Use <code>for</code> and <code>while</code> loops to repeat code and save time.</p>
          </Link>
          <Link to="/unit-2/week-3/day-2" className={styles.dayBox}>
            <h2>Day 2: Events</h2>
            <p>Make your page respond to clicks, keypresses, and more with <code>addEventListener</code>.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitTwoWeek3;