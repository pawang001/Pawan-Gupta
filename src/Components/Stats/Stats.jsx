import React from "react";
import styles from "./Stats.module.css";
import { FaGithub, FaCode, FaLaptopCode } from "react-icons/fa";

export const Stats = () => {
  return (
    <section className={styles.container} id="stats">
      <h2 className={styles.title}>My Stats</h2>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.github}`}>
          <FaGithub className={styles.icon} />
          <h3>GitHub</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=pawang001&show_icons=true&theme=tokyonight&hide=contribs"
            alt="GitHub stats"
          />
          <a
            href="https://github.com/pawang001"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Profile
          </a>
        </div>

        <div className={`${styles.card} ${styles.leetcode}`}>
          <FaCode className={styles.icon} />
          <h3>LeetCode</h3>
          <img
            src="https://leetcard.jacoblin.cool/pawan_001?theme=dark&font=Roboto"
            alt="LeetCode stats"
          />
          <a
            href="https://leetcode.com/u/pawan_001/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
