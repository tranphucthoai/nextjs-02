import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__inner}>
          <p className={styles.text}>This is footer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
