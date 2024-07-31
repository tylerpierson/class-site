import styles from './MathBanner.module.scss'

function MathBanner() {
  return (
    <div className={styles.mathBannerContainer}>
        <h1 className={styles.title}>Math</h1>
        <h3 className={styles.subTitle}>Workshop</h3>
        <div className={styles.spritesheet}></div>
    </div>
  )
}

export default MathBanner