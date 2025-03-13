import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import styles from "./resetPassword.module.scss";
import SubmitBtn from "../../../components/submitBtn/submitBtn";
import ApiUtil from "../../../utils/axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [password]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (password === "") return;

    ApiUtil.post("api/auth/reset-password", {
      newPassword: password,
      token: sessionStorage.getItem("resetToken"),
    }).then((res) => {
      console.log(res.data);
      sessionStorage.removeItem("resetToken");
      navigate("/login");
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Welcome to My App!</h1>
          <p className={styles.subHeader}>Please select a new password.</p>
        </div>

        <form>
          <div className={styles.formField}>
            <label htmlFor="password">New Password</label>
            <Input
              placeholder="Please enter your new password here..."
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>
            Try <Link to="/login">Login</Link> here.
          </p>

          <SubmitBtn onclick={clickHandler} disabled={disabled} />
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
