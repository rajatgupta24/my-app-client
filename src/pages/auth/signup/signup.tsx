import React, { useEffect, useState } from "react";

import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import ApiUtil from "../../../utils/axios";
import SubmitBtn from "../../../components/submitBtn/submitBtn";

import styles from "./signup.module.css";

const Signup = () => {
  const [disabled, setDisabled] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (name === "" || email === "" || password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, email, password]);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") return;

    ApiUtil.post("api/auth/signup", {
      name: name,
      email: email,
      password: password,
    }).then((res) => {
      console.log(res.data);
      navigate("/login");
    });
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Welcome to My App!</h1>
          <p className={styles.subHeader}>Sign up with your data.</p>
        </div>

        <form>
          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <Input
              placeholder="Please enter your fullname here..."
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            Already have an account, <Link to="/login">Login</Link> here.
          </p>

          <SubmitBtn onclick={clickHandler} disabled={disabled} />
        </form>
      </div>
    </>
  );
};

export default Signup;
