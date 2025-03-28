import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Pawan Gupta"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              Pursuing B.Tech in Electronics and Communication Engineering.  
              Focused on Full Stack Development and Software Engineering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I specialize in building scalable web applications using React,
                Spring Boot, and MySQL.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>
                With a strong foundation in data structures and algorithms, I
                have successfully solved 300+ problems on Leetcode and GFG,
                refining my problem-solving abilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
