import styles from './ScienceContainer.module.scss';

function ScienceContainer() {
  return (
    <div className={styles.scienceContainerMain}>
        <div className={styles.scienceContainerLeft}>
            <div className={styles.scienceCard}>
                <h4 className={styles.scienceTitle}>Frontend</h4>
                <ul className={styles.scienceList}>
                    <li className={styles.scienceListItem}>JavaScript</li>
                    <li className={styles.scienceListItem}>HTML/CSS</li>
                    <li className={styles.scienceListItem}>SCSS</li>
                    <li className={styles.scienceListItem}>TypeScript</li>
                    <li className={styles.scienceListItem}>React.js</li>
                    {/* Add more frontend technologies as needed */}
                </ul>
            </div>
            <div className={styles.scienceCard}>
                <h4 className={styles.scienceTitle}>Backend</h4>
                <ul className={styles.scienceList}>
                    <li className={styles.scienceListItem}>Node.js</li>
                    <li className={styles.scienceListItem}>Express.js</li>
                    <li className={styles.scienceListItem}>Django</li>
                    <li className={styles.scienceListItem}>Nuxt.js</li>
                    <li className={styles.scienceListItem}>MongoDB</li>
                    <li className={styles.scienceListItem}>MySQL</li>
                    <li className={styles.scienceListItem}>Supabase</li>
                    <li className={styles.scienceListItem}>Python</li>
                    {/* Add more backend technologies as needed */}
                </ul>
            </div>
        </div>
        <div className={styles.scienceContainerRight}>
            <div className={styles.scienceCard}>
                <h4 className={styles.scienceTitle}>Deployment Tools</h4>
                <ul className={styles.scienceList}>
                    <li className={styles.scienceListItem}>AWS</li>
                    <li className={styles.scienceListItem}>Cloudfront</li>
                    <li className={styles.scienceListItem}>EC2</li>
                    <li className={styles.scienceListItem}>S3</li>
                    <li className={styles.scienceListItem}>DigitalOcean</li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.scienceCard}>
                <h4 className={styles.scienceTitle}>Collaboration Tools</h4>
                <ul className={styles.scienceList}>
                    <li className={styles.scienceListItem}>Slack</li>
                    <li className={styles.scienceListItem}>Discord</li>
                    <li className={styles.scienceListItem}>JIRA</li>
                    <li className={styles.scienceListItem}>Trello</li>
                    <li className={styles.scienceListItem}>GitHub</li>
                    <li className={styles.scienceListItem}>PUSH Project Management</li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default ScienceContainer;
