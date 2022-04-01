import React, { useState, useMemo, useEffect } from "react";
import { Pagination, PostHorizontalNormal } from "../../components";
import styles from "../../styles/Posts.module.css";
import { postsApi } from "../api";
import queryString from "query-string";
import { useRouter } from "next/router";

// export const getStaticProps = async ({ params }) => {
//   try {
//     const params = {
//       _start: 1,
//       _limit: 10,
//     };
//     const data = await postsApi(`?${queryString.stringify(params)}`);
//     const dataOrigin = await postsApi();
//     return {
//       props: {
//         dataOrigin,
//         data,
//         params,
//       },
//     };
//   } catch (error) {
//     console.log("Failed to fetch api posts", error);
//   }
// };

const Posts = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataOrigin, setDataOrigin] = useState([]);
  const { query } = router;

  const queryParams = useMemo(() => {
    return {
      _start: query._start || 1,
      _limit: query._limit || 10,
    };
  }, [query]);

  useEffect(() => {
    (async () => {
      try {
        const dataApi = await postsApi(
          `?${queryString.stringify(queryParams)}`
        );
        setData(dataApi);
        const dataOriginApi = await postsApi();
        setDataOrigin(dataOriginApi);
      } catch (error) {
        console.log("Failed to fetch api posts", error);
      }
    })();
  }, [queryParams]);

  const pageNumClick = (page) => {
    router.push({
      pathname: router.pathname,
      query: { _limit: "10", _start: `${page}` },
    });
    setPage(page);
  };

  return (
    <section className={(styles.section, styles["section-block"])}>
      <div className={styles.container}>
        <div className={styles.section__inner}>
          <ul className={styles["post-list"]}>
            {data.map((dataItem) => (
              <li key={dataItem.id} className={styles["post-item"]}>
                <PostHorizontalNormal data={dataItem} />
              </li>
            ))}
          </ul>
          <Pagination
            page={page}
            limit={10}
            totalItem={dataOrigin.length}
            onClick={pageNumClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Posts;
