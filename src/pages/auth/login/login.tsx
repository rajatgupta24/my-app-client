import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import ApiUtil from "../../../utils/axios";
import { useAuth } from "../../../hooks/useAuth";
import SubmitBtn from "../../../components/submitBtn/submitBtn";

import styles from "./login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true }); // Redirect to home page
    }
  }, [token, navigate]);

  useEffect(() => {
    if (email === "" || password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (email === "" || password === "") return;

    ApiUtil.post("api/auth/login", {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      sessionStorage.setItem("authToken", res.data.token);
      navigate("/");
    });
  };

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
            <Input
              placeholder="Please enter your email here..."
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <Input
              placeholder="Please enter your password here..."
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p>
            Need an account, <Link to="/signup">Sign up</Link> here.
          </p>

          <p>
            <Link to="/forgot-password">Forgot Password</Link>?
          </p>

          <SubmitBtn onclick={clickHandler} disabled={disabled} />
        </form>
      </div>
    </>
  );
};

export default Login;
