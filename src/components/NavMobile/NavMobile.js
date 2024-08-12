import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavMobile.module.scss';
import { getUser, logOut } from '../../utilities/users-service'; // Adjust the import path if necessary

function NavMobile() {
    const [isRotated, setIsRotated] = useState(false);
    const [listShown, setListShown] = useState(false);
    const [user, setUser] = useState(getUser());
    const navigate = useNavigate();

    const handleClick = () => {
        setIsRotated(!isRotated);
        setListShown(!listShown);
    };

    const handleLogout = () => {
        logOut();
        setUser(null); // Clear the user state
        navigate('/'); // Redirect to the home page or login page
      };

    return (
        <nav className={styles.NavMobile}>
            <button className={styles.NavBtn} onClick={handleClick}>
                <span className={`${styles.NavBtnTop} ${isRotated ? styles.rotateTop : styles.revertTop}`}>|</span>
                <span className={`${styles.NavBtnMid} ${isRotated ? styles.fadeOut : styles.fadeIn}`}>|</span>
                <span className={`${styles.NavBtnBottom} ${isRotated ? styles.rotateBottom : styles.revertBottom}`}>|</span>
            </button>
            <div className={`${styles.NavContainer} ${listShown ? styles.expandContainer : styles.collapseContainer}`}>
                <ul className={styles.ul}>
                    <Link className={styles.Link} to='/'>
                        <li className={styles.li}>Home</li>
                    </Link>
                    <Link className={styles.Link} to='/about'>
                        <li className={styles.li}>About Me</li>
                    </Link>
                    <Link className={styles.Link} to='/contact'>
                        <li className={styles.li}>Contact</li>
                    </Link>
                    <a className={styles.Link} onClick={handleLogout}>
                        <li className={styles.li}>Logout</li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default NavMobile;
