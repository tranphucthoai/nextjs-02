import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { Provider } from "react-redux";
import { store } from "../app/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
