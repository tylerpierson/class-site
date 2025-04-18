import React, { useState, useEffect } from "react";
import styles from "./AuthPage.module.scss";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { signUpUserWithRole } from "../../utilities/authHelpers";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");

  const [isSignUp, setIsSignUp] = useState(mode === "signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsSignUp(mode === "signup");
  }, [mode]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let user;

      if (isSignUp) {
        user = await signUpUserWithRole(email, password, "student");
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
      }

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data().role;
      
        if (role === "educator") {
          alert("Educators must log in through the Educator Login Portal.");
          return;
        }
      
        navigate("/dashboard"); // students continue normally
      }
    } catch (err) {
      console.error(`${isSignUp ? "Signup" : "Login"} error:`, err);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <img src="/img/logo_tran_2.png" alt="Innova Logo" className={styles.logo} />
        <h2 className={styles.authBtn}>{isSignUp ? "Create an Account" : "Sign In"}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={styles.row}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
          )}

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {isSignUp ? (
            <>
              <div className={styles.row}>
                <input
                  className={styles.textField}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
              <input
                className={styles.textField}
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
