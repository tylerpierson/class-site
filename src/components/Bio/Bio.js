import styles from './Bio.module.scss'

function Bio() {
  return (
    <div className={styles.Bio}>
        <div className={styles.contentContainer}>
            <h1 className={styles.title}>Fourth<br/>Grade</h1>
        </div>
        <p className={styles.titleDescription}>Here's what we have planned...</p>
    </div>
  )
}

export default Bio