import styles from './MathContainer.module.scss';

function MathContainer() {
  return (
    <div className={styles.mathContainerMain}>
        <div className={styles.mathContainerLeft}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Frontend</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}>JavaScript</li>
                    <li className={styles.mathListItem}>HTML/CSS</li>
                    <li className={styles.mathListItem}>SCSS</li>
                    <li className={styles.mathListItem}>TypeScript</li>
                    <li className={styles.mathListItem}>React.js</li>
                    {/* Add more frontend technologies as needed */}
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Backend</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}>Node.js</li>
                    <li className={styles.mathListItem}>Express.js</li>
                    <li className={styles.mathListItem}>Django</li>
                    <li className={styles.mathListItem}>Nuxt.js</li>
                    <li className={styles.mathListItem}>MongoDB</li>
                    <li className={styles.mathListItem}>MySQL</li>
                    <li className={styles.mathListItem}>Supabase</li>
                    <li className={styles.mathListItem}>Python</li>
                    {/* Add more backend technologies as needed */}
                </ul>
            </div>
        </div>
        <div className={styles.mathContainerRight}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Deployment Tools</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}>AWS</li>
                    <li className={styles.mathListItem}>Cloudfront</li>
                    <li className={styles.mathListItem}>EC2</li>
                    <li className={styles.mathListItem}>S3</li>
                    <li className={styles.mathListItem}>DigitalOcean</li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Collaboration Tools</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}>Slack</li>
                    <li className={styles.mathListItem}>Discord</li>
                    <li className={styles.mathListItem}>JIRA</li>
                    <li className={styles.mathListItem}>Trello</li>
                    <li className={styles.mathListItem}>GitHub</li>
                    <li className={styles.mathListItem}>PUSH Project Management</li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MathContainer;
