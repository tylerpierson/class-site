import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import NavMobile from '../../../components/NavMobile/NavMobile';
import styles from '../UnitStyles/UnitStyles.module.scss';

function UnitTwoPage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.UnitPage}>
        <div className={styles.textContainer}>
            <Link to="/schedule" className={styles.backButton}>
                ← Back to Schedule
            </Link>
          <h1 className={styles.header}>Unit 2: JavaScript Fun!</h1> 
          <p className={styles.description}>Now that you know how to build and style web pages, let's make them come to life with JavaScript!</p>

          <div className={styles.unitContainer}>
            <Link to="/unit-2/week-1" className={styles.unitWidget}>
              <h2>Week 1: Getting Started with JavaScript</h2>
              <p>Learn what JavaScript is and how it helps us make web pages interactive.</p>
            </Link>

            <Link to="/unit-2/week-2" className={styles.unitWidget}>
              <h2>Week 2: Fun with Variables & Functions</h2>
              <p>Discover how to store information and use functions to create cool effects.</p>
            </Link>

            <Link to="/unit-2/week-3" className={styles.unitWidget}>
              <h2>Week 3: Loops & Events</h2>
              <p>Make your website respond to clicks, keypresses, and other fun actions!</p>
            </Link>

            <Link to="/unit-2/week-4" className={styles.unitWidget}>
              <h2>Week 4: Building a Mini Game</h2>
              <p>Use what you've learned to create a simple, interactive game!</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitTwoPage;
