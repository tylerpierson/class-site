import React from "react";
import styles from "./LanguagesSection.module.scss";

const languages = [
    {
      logo: "/img/scratch.png",
      description: "A block-based coding language perfect for beginners to create games and animations."
    },
    {
      logo: "/img/javascript.png",
      description: "Learn how websites work using real code for logic, interactions, and more."
    },
    {
      logo: "/img/html_css.png",
      description: "Design colorful web pages with custom layouts and styles using HTML and CSS."
    }
  ];
  

const LanguagesSection = () => {
  return (
    <section className={styles.languages}>
      <p className={styles.title}>Languages We Teach</p>
      <div className={styles.logos}>
      {languages.map((lang, index) => (
        <div key={index} className={styles.logoItem}>
            <img className={styles.img} src={lang.logo} alt={lang.name} />
            <p className={styles.para}>{lang.description}</p>
        </div>
    ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
