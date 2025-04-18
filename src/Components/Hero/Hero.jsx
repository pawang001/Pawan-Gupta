import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pawan</h1>
        <p className={styles.description}>
        A passionate Full Stack Developer with expertise in Java, Spring Boot, and React.js. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
        <Link className={styles.contactBtn} to="/contact">Contact Me</Link>
        <a href="https://drive.google.com/drive/folders/1zYHuVwetYRM9pHF9nKrbORjRwxNgIbA0?usp=drive_link" target="_blank" className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/profile-pic.webp")}
        alt="Pawan Gupta"
        className={styles.heroImg}
      />
    </section>
  );
};

export default Hero;