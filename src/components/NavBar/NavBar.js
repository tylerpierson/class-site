import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const notHome = location.pathname !== "/";
      setScrolled(window.scrollY > 60 || notHome);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserRole(docSnap.data().role); // 'student' or 'educator'
        }
      } else {
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const getDashboardLink = () => {
    return userRole === "educator" ? "/educator-dashboard" : "/dashboard";
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.shrink : ""}`}>
      <img
        src="/img/logo_tran_1.png"
        alt="Innova Logo"
        className={`${styles.logoImg} ${scrolled ? styles.logoShrink : ""}`}
      />

      <nav className={styles.navLinks}>
        {currentUser ? (
          <>
            <Link to={getDashboardLink()} className={styles.link}>Dashboard</Link>

            {userRole === "student" && (
              <Link to="/calendar" className={styles.link}>Calendar</Link>
            )}
          </>
        ) : (
          <>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/pricing" className={styles.link}>Pricing</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </>
        )}
      </nav>

      <div className={styles.authButtons}>
        {currentUser ? (
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        ) : (
          <>
            <Link to="/auth?mode=login" className={styles.loginBtn}>Login</Link>
            <Link to="/auth?mode=signup" className={styles.signupBtn}>Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
