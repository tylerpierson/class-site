import styles from './ScienceContainer.module.scss';

function ScienceContainer() {
  return (
    <>
        <div className={styles.scienceContainerMain}>
            <div className={styles.scienceContainerLeft}>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>This weeks TEKS</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}></li>
                    </ul>
                </div>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>Anchor Charts</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}></li>
                    </ul>
                </div>
            </div>
            <div className={styles.scienceContainerRight}>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>I can...</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}></li>
                    </ul>
                </div>
                <div className={styles.scienceCard}>
                    <h4 className={styles.scienceTitle}>Extra Resources</h4>
                    <ul className={styles.scienceList}>
                        <li className={styles.scienceListItem}></li>
                    </ul>
                </div>
            </div>
        <div className={styles.spritesheet}></div>
        </div>
    </>
  );
}

export default ScienceContainer;
