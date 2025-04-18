import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../components/NavBar/NavBar';
import NavMobile from '../../../components/NavMobile/NavMobile';
import styles from '../UnitStyles/UnitStyles.module.scss';

function UnitThreePage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.UnitPage}>
        <div className={styles.textContainer}>
            <Link to="/schedule" className={styles.backButton}>
                ← Back to Schedule
            </Link>

          <h1 className={styles.header}>Unit 3: Final Project</h1> 
          <p className={styles.description}>Apply your knowledge from the course to build a final project using HTML, CSS, and JavaScript.</p>

          <div className={styles.unitContainer}>
            <Link to="/unit-3/week-1" className={styles.unitWidget}>
              <h2>Week 1: Project Planning</h2>
              <p>Brainstorm ideas and outline the structure of your final project.</p>
            </Link>

            <Link to="/unit-3/week-2" className={styles.unitWidget}>
              <h2>Week 2: Building the Structure</h2>
              <p>Create the HTML foundation and start adding CSS for styling.</p>
            </Link>

            <Link to="/unit-3/week-3" className={styles.unitWidget}>
              <h2>Week 3: Adding Interactivity</h2>
              <p>Use JavaScript to add interactivity and enhance user experience.</p>
            </Link>

            <Link to="/unit-3/week-4" className={styles.unitWidget}>
              <h2>Week 4: Project Showcase</h2>
              <p>Complete your project and present it to the class for feedback.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitThreePage;