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
                    <p className={styles.event}><span className={styles.date}>September 2nd:</span> Labor Day (No School)</p>
                    <p className={styles.event}><span className={styles.date}>September 20th:</span> Student Half Day (Released at Noon)</p>
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
                    <p className={styles.headerPara}>Stable Spirit</p>
                    <p className={styles.reminderPara}>Every student at SRE belongs to a stable. Stables are very important at SRE because they provide students with a community outside of their classroom and grade level. Every Friday we dress up in our stable colors and celebrate the spirit of The Ranch! Every Friday we will attend either stable buddies, stable huddles, or Celebrate Sandbrock which provides students time to be with their spirit group!</p>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default NewsLetter