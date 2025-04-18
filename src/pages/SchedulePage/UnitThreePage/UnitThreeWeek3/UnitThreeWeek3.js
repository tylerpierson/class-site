import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitThreeWeek3() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-3" className={styles.backButton}>
          ← Back to Unit 3 - Weeks
        </Link>

        <h1>Unit 3 - Week 3: Adding Interactivity</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-3/week-3/day-1" className={styles.dayBox}>
            <h2>Day 1: JavaScript Features</h2>
            <p>Add interactivity using JavaScript — think buttons, popups, and more!</p>
          </Link>
          <Link to="/unit-3/week-3/day-2" className={styles.dayBox}>
            <h2>Day 2: Enhancing User Experience</h2>
            <p>Make your project more engaging with animations, transitions, and event listeners.</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitThreeWeek3;