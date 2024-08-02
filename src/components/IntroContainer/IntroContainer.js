import styles from './IntroContainer.module.scss'
import SpriteAnimation from '../SpriteAnimation/SpriteAnimation'
import SpriteAnimationMed from '../SpriteAnimation/SpriteAnimationMed'

function IntroContainer() {
  return (
    <div className={styles.IntroContainer}>
      <div className={styles.mainContent}>
        <h4 className={styles.headingSM}>Sandbrock Ranch Elementary</h4>
        <h1 className={styles.heading}>Hello! <span className={styles.spanText}>I'm</span><br/>Mr. Pierson </h1>
        <h3 className={styles.subHeading}>4th Grade Math & Science</h3>
      </div>
      {/* <SpriteAnimation /> */}
      <SpriteAnimationMed />
    </div>
  )
}

export default IntroContainer