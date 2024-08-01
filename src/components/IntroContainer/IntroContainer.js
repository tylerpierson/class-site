import styles from './IntroContainer.module.scss'

function IntroContainer() {
  return (
    <div className={styles.IntroContainer}>
      <h4 className={styles.headingSM}>Sandbrock Ranch Elementary</h4>
      <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span><br/>Mr. Pierson </h1>
      <h3 className={styles.subHeading}>4th Grade Math & Science</h3>
    {/* <img className={styles.image} src="/img/headshot.png" /> */}
    </div>
  )
}

export default IntroContainer