import styles from './FourthBanner.module.scss'

function FourthBanner() {
  return (
    <div className={styles.FourthBanner}>
        <div className={styles.contentContainer}>
            <h1 className={styles.title}>Fourth<br/>Grade</h1>
        </div>
        <p className={styles.titleDescription}>Here's what we have planned...</p>
    </div>
  )
}

export default FourthBanner