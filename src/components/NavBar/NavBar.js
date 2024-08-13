import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, logOut } from '../../utilities/users-service';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    }
    fetchUser();
  }, []);

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

  const handleLogout = () => {
    logOut();
    setUser(null); // Clear the user state
    navigate('/'); // Redirect to the home page or login page
  };

  return (
    <nav className={`${styles.Nav} ${isScrolled ? styles.hidden : ''}`}>
      <img className={styles.image} src="/img/mr_pierson_logo.png" alt="Logo"/>
      <ul className={styles.ul}>
        <Link className={styles.listItemContainer} to='/home'>
          <div className={styles.navItemTop}><li className={styles.listItem}>Home</li></div>
          <div className={styles.navItemBottom}><li className={styles.listItem}>Home</li></div>
        </Link>
        {user && (
          <Link className={styles.listItemContainer} to={`/${user._id}`}>
            <div className={styles.navItemTop}><li className={styles.listItem}>Profile</li></div>
            <div className={styles.navItemBottom}><li className={styles.listItem}>Profile</li></div>
          </Link>
        )}
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
          <a className={styles.listItemContainer} onClick={handleLogout}>
            <div className={styles.navItemTop}><li className={styles.listItem}>Logout</li></div>
            <div className={styles.navItemBottom}><li className={styles.listItem}>Logout</li></div>
          </a>
      </ul>
    </nav>
  );
}
