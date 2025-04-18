import React, { useEffect } from "react";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>
        Have a question about our courses or curriculum? Want to learn how Innova can
        spark your child’s interest in coding? We’d love to hear from you.
      </p>

      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
