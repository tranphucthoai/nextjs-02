import React from "react";
import styles from "../styles/Pagination.module.css";
import clsx from "clsx";

const Pagination = ({ page = 1, totalItem = 1, limit = 1, onClick = null }) => {
  const totalPages = Math.ceil(totalItem / limit);
  const jsxPage = [];

  for (let i = 1; i <= totalPages; i++) {
    let temp = (
      <li
        className={clsx(styles["pagination-item"], i == page && styles.active)}
        key={i}
      >
        <a
          className={styles["pagination__link"]}
          onClick={() => {
            onClick && onClick(i);
          }}
        >
          {i}
        </a>
      </li>
    );
    jsxPage.push(temp);
  }
  return (
    <nav className={styles.pagination}>
      <ul className={styles["pagination-list"]}>{jsxPage}</ul>
    </nav>
  );
};

export default Pagination;
