import React, { useEffect, useState } from "react";
import styles from "./EducatorAuthPage.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const EducatorAuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const sanitizedEmail = email.trim().toLowerCase();
    const metadataRef = doc(db, "userMetadata", sanitizedEmail);

    try {
      // 🔍 Check user role first
      const metadataSnap = await getDoc(metadataRef);

      if (!metadataSnap.exists()) {
        alert("No account found for this email.");
        return;
      }

      const role = metadataSnap.data().role;
      if (role !== "educator" && role !== "admin") {
        alert("This login portal is for educators only.");
        return;
      }

      // ✅ Proceed with login
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      navigate("/educator-dashboard");

    } catch (error) {
      console.error("Educator login error:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.card}>
        <img src="/img/logo_tran_2.png" alt="Innova Logo" className={styles.logo} />
        <h2 className={styles.authTitle}>Educator Login</h2>

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Educator Email"
            required
            className={styles.textField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
