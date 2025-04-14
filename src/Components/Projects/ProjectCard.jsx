import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      <img
        src={getImageUrl(imageSrc)}
        alt={title}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id}>{skill}</li>
          ))}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {source && (
            <a href={source} target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
