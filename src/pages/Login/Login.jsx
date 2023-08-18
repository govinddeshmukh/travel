import React from "react";
import styles from "./Login.module.scss";
import img from "../../assets/login.jpg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__container__left}>
          <h1>Welcome <span style={{color:"red"}}>B</span>ack</h1>
          <img src={img} alt="" />
        </div>
        <div className={styles.login__container__right}>
          <form className={styles.login__container__right__form}>
            <div className={styles.login__container__right__form__input}>
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles.login__container__right__form__input}>
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className={styles.login__container__right__form__login}>
              <button>Login</button>
            </div>
            <div className={styles.login__container__right__form__text}>
              new user?{" "}
              <Link to="/register">
                <button>Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
