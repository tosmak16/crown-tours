import React from "react";

import Title from "../Title";

import styles from "./contactform.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/tosmak16@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>

            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Message"
            />
          </div>
          <div>
            <input type="submit" value="Submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
