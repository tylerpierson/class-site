import React, { useState, useEffect } from "react";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

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
        <h2>{isSignUp ? "Create an Account" : "Sign In"}</h2>

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
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm" required />
              </div>
              <input type="text" placeholder="Location" required />
              <label className={styles.terms}>
                <input type="checkbox" required /> I agree to the Terms and Privacy Policy
              </label>
              <button type="submit" className={styles.submitBtn}>Sign Up</button>
            </>
          ) : (
            <>
              <input type="password" placeholder="Your Password" required />
              <div className={styles.extraRow}>
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
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
      </div>
    </div>
  );
};

export default AuthPage;
