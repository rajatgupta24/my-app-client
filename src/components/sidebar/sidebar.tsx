// import React from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  DatabaseOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="public/vite.svg" alt="" />
        <p>My App 🚀</p>
      </div>
      <ul className={styles.linkList}>
        <li>
          <Link className={styles.link} to="/">
            <HomeOutlined />
            <p className={styles.linkName}>Home</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/catalog">
            <DatabaseOutlined />
            <p className={styles.linkName}>Transactions</p>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/reporting">
            <PieChartOutlined />
            <p className={styles.linkName}>Analysis</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
