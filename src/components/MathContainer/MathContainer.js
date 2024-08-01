import styles from './MathContainer.module.scss';

function MathContainer() {
  return (
    <div className={styles.mathContainerMain}>
        <div className={styles.mathContainerLeft}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>This weeks TEKS</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}></li>
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Anchor Charts</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}></li>
                </ul>
            </div>
        </div>
        <div className={styles.mathContainerRight}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>I can...</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}></li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Extra Resources</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}></li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MathContainer;
