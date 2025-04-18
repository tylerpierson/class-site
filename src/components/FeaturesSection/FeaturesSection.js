// File: components/FeaturesSection.jsx
import React from "react";
import styles from "./FeaturesSection.module.scss";

const features = [
  {
    icon: "/img/gameIcon.png",
    title: "Gamified Lessons",
    description: "Kids learn to code through interactive challenges and fun games.",
  },
  {
    icon: "/img/logicIcon.png",
    title: "Creative Thinking",
    description: "Build logic, creativity, and problem-solving from an early age.",
  },
  {
    icon: "/img/projectIcon.png",
    title: "Real Projects",
    description: "Students create real coding projects they can be proud of.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>What Makes Innova Different?</h2>
      <p className={styles.subtitle}>
        Our platform is designed with young learners in mind — playful, powerful, and educational.
      </p>
      <div className={styles.cards}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
