import React, { useEffect } from "react";
import styles from "./EducatorAuthPage.module.scss";
import { Link } from "react-router-dom";

const EducatorAuthPage = () => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <img src="/img/logo_tran_2.png" alt="Innova Logo" className={styles.logo} />
        <h2 className={styles.authTitle}>Educator Login</h2>

        <form className={styles.form}>
          <input type="email" placeholder="Educator Email" required className={styles.textField} />
          <input type="password" placeholder="Password" required className={styles.textField} />

          <div className={styles.extraRow}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a className={styles.link} href="#">Forgot password?</a>
          </div>

          <button type="submit" className={styles.submitBtn}>Log In</button>
        </form>

        <p className={styles.help}>
          Need help? Contact the admin at <a href="mailto:admin@innova.com">admin@innova.com</a>
        </p>

        <p className={styles.toggleBack}>
            Not an educator? <Link to="/auth?mode=login">Go back to student login</Link>
        </p>

      </div>
    </div>
  );
};

export default EducatorAuthPage;
