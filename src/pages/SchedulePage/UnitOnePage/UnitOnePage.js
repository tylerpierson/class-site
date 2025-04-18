import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import NavMobile from '../../../components/NavMobile/NavMobile';
import styles from '../UnitStyles/UnitStyles.module.scss';

function UnitOnePage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.UnitPage}>
        <div className={styles.textContainer}>
          <Link to="/schedule" className={styles.backButton}>
            ← Back to Schedule
          </Link>

          <h1 className={styles.header}>Unit 1: HTML & CSS Foundations</h1> 
          <p className={styles.description}>
            Discover how websites are built with simple step-by-step lessons and activities.
          </p>

          <div className={styles.unitContainer}>
            <Link to="/unit-1/week-1" className={styles.unitWidget}>
              <h2>Week 1: Basics of HTML</h2>
              <p>Learn the essentials of creating the structure of a webpage using tags and elements.</p>
            </Link>

            <Link to="/unit-1/week-2" className={styles.unitWidget}>
              <h2>Week 2: Introduction to CSS</h2>
              <p>Explore how to style your webpage with colors, fonts, and layouts to make it stand out.</p>
            </Link>

            <Link to="/unit-1/week-3" className={styles.unitWidget}>
              <h2>Week 3: Responsive Design</h2>
              <p>Make your website look great on different devices with practical techniques like flexbox.</p>
            </Link>

            <Link to="/unit-1/week-4" className={styles.unitWidget}>
              <h2>Week 4: Create Your Project</h2>
              <p>Use your skills to build and design a complete webpage as your final project.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitOnePage;
