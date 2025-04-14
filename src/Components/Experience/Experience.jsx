import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Skills</h2>

      <div className={styles.grid}>
        <div className={styles.skillsSection}>
          <h3 className={styles.subTitle}>Tech Stack</h3>
          <div className={styles.skillsGrid}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skillCard}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.timelineSection}>
          <h3 className={styles.subTitle}>Work Experience</h3>
          <div className={styles.timeline}>
            {history.map((item, id) => (
              <div key={id} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
                </div>
                <div className={styles.timelineContent}>
                  <h4>{item.role}, {item.organisation}</h4>
                  <span>{item.startDate} - {item.endDate}</span>
                  <ul>
                    {item.experiences.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
