import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_COMMENTS } from "../../constants";
import styles from "../../styles/Comments.module.css";

const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ALL_COMMENTS });
  }, []);

  const { data } = useSelector((state) => state.CommentsReducer);

  return (
    <section className={(styles.section, styles["section-block"])}>
      <div className={styles.container}>
        <div className={styles.section__inner}>
          <ul>
            {data.map((dataItem) => (
              <li key={dataItem.id}>
                <p>{dataItem.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comments;
