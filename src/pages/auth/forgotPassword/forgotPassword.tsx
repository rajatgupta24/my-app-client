import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import styles from "./forgotPassword.module.css";
import SubmitBtn from "../../../components/submitBtn/submitBtn";
import ApiUtil from "../../../utils/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (email === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (email === "") return;

    ApiUtil.post("api/auth/forgot-password", {
      email: email,
    }).then((res) => {
      // console.log(res.data);

      localStorage.setItem("resetToken", res.data.message);

      navigate("/reset-password");
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Welcome to My App!</h1>
          <p className={styles.subHeader}>
            Please enter your registered email.
          </p>
        </div>

        <form>
          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="Please enter your email here..."
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgotPassword;
