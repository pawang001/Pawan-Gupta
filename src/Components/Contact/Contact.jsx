import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
      <p>Get in touch</p>
        <h2>Contact Me</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="_blank" href="mailto:pawang1710@gmail.com">pawang1710@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/pawan-gupta-72a1a622a">Linked In</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/pawang001">Github</a>
        </li>
      </ul>
      <p>
      Made by Pawan Gupta (●'◡'●)
      </p>
    </footer>
  );
};

export default Contact;