import React from 'react';
import { Link } from 'react-router-dom'
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitTwoWeek4() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-2" className={styles.backButton}>
          ← Back to Unit 2 - Weeks
        </Link>

        <h1>Unit 2 - Week 4: Building a Mini Game</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-2/week-4/day-1" className={styles.dayBox}>
            <h2>Day 1: Plan Your Game</h2>
            <p>Choose your game idea and plan out the actions, interactions, and visuals you want to include.</p>
          </Link>
          <Link to="/unit-2/week-4/day-2" className={styles.dayBox}>
            <h2>Day 2: Build & Play!</h2>
            <p>Put it all together — use JavaScript, HTML, and CSS to build your mini game and share it!</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitTwoWeek4;