import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={(styles.section, styles["section-block"])}>
        <div className={styles.container}>
          <div className={styles.section__inner}></div>
        </div>
      </section>
    </div>
  );
}
