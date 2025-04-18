import React, { useState, useEffect } from "react";
import styles from "./AuthPage.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AuthPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const mode = queryParams.get("mode");

    const [isSignUp, setIsSignUp] = useState(mode === "signup");

    useEffect(() => {
    setIsSignUp(mode === "signup");
    }, [mode]);


  useEffect(() => {
    // Disable scrolling only while AuthPage is mounted
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Restore original style on unmount
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <img src="/img/logo_tran_2.png" alt="Innova Logo" className={styles.logo} />
        <h2 className={styles.authBtn}>{isSignUp ? "Create an Account" : "Sign In"}</h2>

        <form className={styles.form}>
          {isSignUp && (
            <div className={styles.row}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
          )}

          <input type="email" placeholder="Your Email" required />

          {isSignUp ? (
            <>
              <div className={styles.row}>
                <input className={styles.textField} type="password" placeholder="Password" required />
                <input className={styles.textField} type="password" placeholder="Confirm" required />
              </div>
              <input className={styles.textField} type="text" placeholder="Location" required />
              <label className={styles.terms}>
                <input type="checkbox" required /> I agree to the Terms and Privacy Policy
              </label>
              <button type="submit" className={styles.submitBtn}>Sign Up</button>
            </>
          ) : (
            <>
              <input className={styles.textField} type="password" placeholder="Your Password" required />
              <div className={styles.extraRow}>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a className={styles.link} href="#">Forgot password?</a>
              </div>
              <button type="submit" className={styles.submitBtn}>Continue</button>
            </>
          )}
        </form>

        <p className={styles.toggle}>
          {isSignUp ? (
            <>Already have an account? <span onClick={() => setIsSignUp(false)}>Sign in</span></>
          ) : (
            <>Don’t have an account? <span onClick={() => setIsSignUp(true)}>Sign up</span></>
          )}
        </p>

        <p className={styles.help}>Need help? Contact us at <a href="mailto:help@innova.com">help@innova.com</a></p>
        <p className={styles.educatorLink}>
          Are you an educator? <Link to="/educator-auth">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
