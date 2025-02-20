import React from "react";
import { Input } from "antd";

import styles from "./login.module.css";

const Login = () => {
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

          <button></button>
        </form>
      </div>
    </>
  );
};

export default Login;
