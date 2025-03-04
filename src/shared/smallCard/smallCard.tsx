// import React from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "./smallCard.module.css";

const SmallCard = () => {
  return (
    <div className={styles.cardItem}>
      <Avatar className={styles.cardItemImage} icon={<UserOutlined />} />
      <div className={styles.cardItemInfo}>
        <p>Name</p>
        <p>Location</p>
      </div>
      <div className={styles.cardItemRemark}>
        <p>$500</p>
      </div>
    </div>
  );
};

export default SmallCard;
