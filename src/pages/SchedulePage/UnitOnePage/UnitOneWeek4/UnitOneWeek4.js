import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../components/NavBar/NavBar';
import NavMobile from '../../../../components/NavMobile/NavMobile';
import styles from '../../UnitStyles/UnitWeekStyles.module.scss';

function UnitOneWeek4() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.WeekPage}>
        <Link to="/unit-1" className={styles.backButton}>
          ← Back to Unit 1 - Weeks
        </Link>
        <h1>Unit 1 - Week 4: Create Your Project</h1>

        <div className={styles.dayContainer}>
          <Link to="/unit-1/week-4/day-1" className={styles.dayBox}>
            <h2>Day 1: Planning Your Page</h2>
            <p>Sketch your webpage idea and list out the sections and styles you'll include.</p>
          </Link>
          <Link to="/unit-1/week-4/day-2" className={styles.dayBox}>
            <h2>Day 2: Building & Sharing</h2>
            <p>Use HTML and CSS to build your final project and get ready to show it to the class!</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default UnitOneWeek4;