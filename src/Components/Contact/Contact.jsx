import React, { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mjkyljwy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Your message has been sent successfully!");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        Let's connect — I'm open to collaboration, freelancing, or just a friendly chat!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status !== "idle" && (
        <div
          className={`${styles.toast} ${
            status === "success" ? styles.success : styles.error
          }`}
        >
          {message}
        </div>
      )}
    </section>
  );
};

export default Contact;
