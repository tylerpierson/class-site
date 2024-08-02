import React from 'react'
import styles from './NewsLetter.module.scss'

function NewsLetter() {
    return (
      <>    
        <div id="newsletter" className={styles.NewsLetterContainer}>
          <div className={styles.mainContent}>
            <h1 className={styles.heading}>News <span className={styles.spanText}>Letter</span></h1>
            <h3 className={styles.subHeading}>What's happening on the Ranch?</h3>
            <div className={styles.news}>
                <div className={styles.upcomingEvents}>
                    <h2 className={styles.title}>Upcoming Events</h2>
                    <p className={styles.event}><span className={styles.date}>August 5th:</span> Meet the Teacher Night</p>
                    <p className={styles.event}><span className={styles.date}>August 7th:</span> First Day of School</p>
                    <p className={styles.event}><span className={styles.date}>August 30th:</span> First Half
                    Day, dismissal at 12 pm</p>
                </div>
                <div className={styles.reminders}>
                    <h2 className={styles.title}>Reminders</h2>
                    <p className={styles.welcome}>Welcome Back!</p>
                    <p className={styles.header}>Some important things to do to prepare for a successful school year....</p>
                    <p className={styles.reminder}>1. Complete the room parent interest form</p>
                    <p className={styles.reminder}>2. Complete the transportation form </p>
                    <p className={styles.reminder}>3. Purchase and organize student school
                    supplies</p>
                    <p className={styles.reminder}>4. Ensure you are receiving Mr. Pierson’s
                    emails (tpierson@dentonisd.org)</p>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default NewsLetter