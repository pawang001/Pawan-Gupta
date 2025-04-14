import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src={getImageUrl("about/aboutImage.webp")}
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
          <p>Crafting responsive, full-featured applications using React, Tailwind, Spring Boot, and RESTful APIs.</p>
          <Link to="/projects" className={styles.linkBtn}>Explore Projects</Link>
        </div>
        <div className={styles.skillCard}>
          <h3>DSA Enthusiast</h3>
          <p>Sharpened my problem-solving skills by solving 300+ questions on LeetCode and GFG.</p>
          <Link to="/stats" className={styles.linkBtn}>View My Stats</Link>
        </div>
        <div className={styles.skillCard}>
          <h3>Collaborative Learner</h3>
          <p>I thrive in team environments and enjoy taking on new challenges to grow and contribute.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
