import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import NavMobile from '../../components/NavMobile/NavMobile';
import styles from './SchedulePage.module.scss';

function SchedulePage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.SchedulePage}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Web Development Course Schedule</h1> 

          <div className={styles.unitContainer}>
            <Link to="/unit-1" className={styles.unitWidget}>
              <h2>Unit 1: HTML & CSS Foundations</h2>
              <p>Learn how to structure web pages using HTML and style them with CSS.</p>
            </Link>

            <Link to="/unit-2" className={styles.unitWidget}>
              <h2>Unit 2: JavaScript Basics</h2>
              <p>Introduce interactivity with JavaScript and explore basic programming concepts.</p>
            </Link>

            <Link to="/unit-3" className={styles.unitWidget}>
              <h2>Unit 3: Final Project</h2>
              <p>Build and present a complete web project using what you've learned.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchedulePage;
