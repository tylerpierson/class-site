import React from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <nav className={styles.Nav}>
            <h2 className={styles.title}>Mr. Pierson</h2>
            <ul className={styles.ul}>
                <Link className={styles.listItemContainer} to='/'>
                    <div className={styles.navItemTop}><li className={styles.listItem}>Home</li></div>
                    <div className={styles.navItemBottom}><li className={styles.listItem}>Home</li></div>
                </Link>
                <Link className={styles.listItemContainer} to='/about'>
                    <div className={styles.navItemTop}><li className={styles.listItem}>About Me</li></div>
                    <div className={styles.navItemBottom}><li className={styles.listItem}>About Me</li></div>
                </Link>
                <Link className={styles.listItemContainer} to='/contact'>
                    <div className={styles.navItemTop}><li className={styles.listItem}>Contact</li></div>
                    <div className={styles.navItemBottom}><li className={styles.listItem}>Contact</li></div>
                </Link>
            </ul>
        </nav>
    )
}
