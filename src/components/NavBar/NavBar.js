import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.Nav} ${isScrolled ? styles.hidden : ''}`}>
      <img className={styles.image} src="/img/mr_pierson_logo.png" alt="Logo"/>
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
        <a className={styles.listItemContainer} href="#newsletter">
          <div className={styles.navItemTop}><li className={styles.listItem}>Newsletter</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>Newsletter</li></div>
        </a>
      </ul>
    </nav>
  );
}
