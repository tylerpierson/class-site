import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitThreeWeek4() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-3" className={styles.backButton}>
          ← Back to Unit 3 - Weeks
        </Link>

        <h1>Unit 3 - Week 4: Project Showcase</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-3/week-4/day-1" className={styles.dayBox}>
            <h2>Day 1: Final Touches</h2>
            <p>Polish your code, fix bugs, and make sure everything works smoothly.</p>
          </Link>
          <Link to="/unit-3/week-4/day-2" className={styles.dayBox}>
            <h2>Day 2: Presentation Day</h2>
            <p>Show off your finished project and get feedback from classmates and instructors!</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitThreeWeek4;