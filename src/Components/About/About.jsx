import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Pawan Gupta"
            className={styles.profileImg}
          />
        </div>

        <div className={styles.textSection}>
          <p>
            Hi, I'm <strong>Pawan Gupta</strong>, a passionate Full Stack Developer currently pursuing B.Tech in Electronics and Communications Engineering.
            With a strong foundation in both frontend and backend development, I specialize in crafting efficient, user-focused web applications.
          </p>
          <p>
            Beyond coding, I love exploring music and staying updated with emerging tech trends. I'm always open to collaboration and learning new things.
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <div className={styles.skillCard}>
          <h3>Full Stack Development</h3>
          <p>Building modern, scalable apps using React, Tailwind CSS, Spring Boot, and RESTful APIs.</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Data Structures & Algorithms</h3>
          <p>Strong command in DSA with 300+ problems solved on LeetCode and GFG.</p>
        </div>
        <div className={styles.skillCard}>
          <h3>Team Player & Learner</h3>
          <p>Always eager to learn, collaborate, and contribute to innovative projects that make an impact.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
