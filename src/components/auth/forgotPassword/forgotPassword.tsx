import React from "react";

import { Input } from "antd";

import styles from "./forgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Welcome to My App!</h1>
          <p className={styles.subHeader}>
            Sign in with your data that you enterd during your registration.
          </p>
        </div>

        <form>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <Input placeholder="Basic usage" name="email" />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <Input placeholder="Basic usage" name="password" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
