import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <Link href="/posts">
                <a className={styles.nav__link}>Posts</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/comments">
                <a className={styles.nav__link}>Comments</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/albums">
                <a className={styles.nav__link}>Albums</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/photos">
                <a className={styles.nav__link}>Photos</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/todos">
                <a className={styles.nav__link}>Todos</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/users">
                <a className={styles.nav__link}>Users</a>
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
