import React from "react";
import styles from "../styles/PostHorizontalNormal.module.css";
import Link from "next/link";

const PostHorizontalNormal = ({ data }) => {
  return (
    <article className={styles.post}>
      {/* <div className={styles.post__thumb}>
        <Link href={`/posts${1}`}>
          <a>
            <Image src="" alt="" />
          </a>
        </Link>
      </div> */}
      <div className={styles["post-text"]}>
        <h3 className={styles.post__title}>
          <Link href={`/posts/${data.id}`}>
            <a>{data.title}</a>
          </Link>
        </h3>
        <div className={styles.post__des}>{data.body}</div>
      </div>
    </article>
  );
};

export default PostHorizontalNormal;
