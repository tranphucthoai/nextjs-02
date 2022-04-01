import React from "react";
import { commentsApi, postsApi, usersApi } from "../api";
import styles from "../../styles/SinglePost.module.css";
import { useRouter } from "next/router";

export const getStaticPaths = async (context) => {
  const data = await postsApi();

  const paths = data.map((dataItem) => {
    return {
      params: {
        id: dataItem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.id;
    const data = await postsApi(`/${id}`);

    const dataUser = await usersApi(`/${id}`);
    return {
      props: {
        data,
        dataUser,
        context: context.params,
      },
    };
  } catch (error) {
    console.log("Failed to fetch api single post", error);
  }
};

const SinglePost = ({ data, dataUser, context }) => {
  const router = useRouter();
  console.log("context", context);
  console.log("router", router);

  return (
    <section className={(styles.section, styles["section-block"])}>
      <div className={styles.container}>
        <div className={styles.section__inner}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.des}>{data.body}</p>
          <p className={styles.auhthor}>By {dataUser.username}</p>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
