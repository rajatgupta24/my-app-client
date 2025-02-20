import React from "react";

import { Input } from "antd";
import { Avatar } from "antd";
import { UserOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";

import styles from "./header.module.css";

const AppHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Input className={styles.searchBar} prefix={<SearchOutlined />} />
      </div>
      <div className={styles.right}>
        <Avatar className={styles.cardItemImage} icon={<BellOutlined />} />
        <Avatar className={styles.cardItemImage} icon={<UserOutlined />} />
      </div>
    </div>
  );
};

export default AppHeader;
