import React, { useState } from "react";
import styles from "./EducatorsPage.module.scss";
import useAuth from "../../hooks/useAuth";
import { getFunctions, httpsCallable } from "firebase/functions";

const EducatorsPage = () => {
  const { role } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddEducator = async (firstName, lastName, email) => {
    try {
      const functions = getFunctions();
      const addEducator = httpsCallable(functions, "addEducator");
      const result = await addEducator({ firstName, lastName, email });

      alert(`Educator added. Temporary password:
\n${result.data.password}`);
    } catch (error) {
      console.error("Failed to add educator:", error.message);
      alert("Error: " + error.message);
    }
  };

  if (role !== "admin") return <p>Unauthorized</p>;

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>Manage Educators</h1>

      <div className={styles.formCard}>
        <h2 className={styles.subheader}>Add New Educator</h2>
        <form
            className={styles.form}
          onSubmit={async (e) => {
            e.preventDefault();
            await handleAddEducator(firstName, lastName, email);
            setFirstName("");
            setLastName("");
            setEmail("");
          }}
        >
          <input
            className={styles.textField}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            className={styles.textField}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className={styles.textField}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>Add Educator</button>
        </form>
      </div>

      {/* Future section for listing educators */}
    </div>
  );
};

export default EducatorsPage;
