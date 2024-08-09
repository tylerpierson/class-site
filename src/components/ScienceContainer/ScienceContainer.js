import styles from './ScienceContainer.module.scss';

function ScienceContainer() {
  return (
    <>
        <div className={styles.scienceContainerMain}>
            <div className={styles.scienceContainerLeft}>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>This weeks TEKS</h4>
                    <ul className={styles.scienceList}>
                    <li className={styles.scienceListItem}><span className={styles.span}></span> </li>
                    <br/><li className={styles.scienceListItem}><span className={styles.span}></span> </li>
                    </ul>
                </div>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>Anchor Charts</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}><a href="https://i.pinimg.com/474x/a4/11/2a/a4112a9d78d823f810345a3ea09bff1b.jpg"><img className={styles.img} src="https://i.pinimg.com/474x/a4/11/2a/a4112a9d78d823f810345a3ea09bff1b.jpg" /></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.scienceContainerRight}>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>I can...</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}><span className={styles.span}>I can </span>explain and demonstrate how to stay safe and respectful while conducting experiments in the science classroom.</li>
                    </ul>
                </div>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>Extra Resources</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}><a className={styles.link} href="https://climatekids.nasa.gov/safe-scientist/">NASA's Climate Kids - Be a Safe Scientist</a></li>
                        <br/><li className={styles.scienceListItem}><a className={styles.link} href="https://www.brainpop.com/science/scientificinquiry/sciencesafety/">BrainPOP - Science Safety</a></li>
                        <br/><li className={styles.scienceListItem}><a className={styles.link} href="https://www.scholastic.com/teachers/articles/teaching-content/science-lab-safety-rules/">Scholastic - Science Lab Safety Rules</a></li>
                        <br/><li className={styles.scienceListItem}><a className={styles.link} href="https://www.sciencebuddies.org/science-fair-projects/science-safety">Science Buddies - Science Safety Guide</a></li>
                        <br/><li className={styles.scienceListItem}><a className={styles.link} href="https://www.acs.org/content/acs/en/education/resources/k-8/science-safety.html">American Chemical Society - Safety in the Elementary Science Classroom</a></li>
                    </ul>
                </div>
            </div>
        <div className={styles.spritesheet}></div>
        </div>
    </>
  );
}

export default ScienceContainer;
