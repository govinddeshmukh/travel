import React from "react";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__container__left}>
          <h1>Sign Up</h1>
          <div className={styles.register__container__left__img}>
            <p>“Take only memories, leave only footprints.”</p>
          </div>
        </div>
        <div className={styles.register__container__right}>
          <div className={styles.register__container__right__content}>
            <form className={styles.register__container__right__content__form}>
              <div
                className={
                  styles.register__container__right__content__form__name
                }
              >
                <div
                  className={
                    styles.register__container__right__content__form__name__first
                  }
                >
                  <label>First Name</label>
                  <input type="text" placeholder="first name" />
                </div>
                <div
                  className={
                    styles.register__container__right__content__form__name__last
                  }
                >
                  <label>Last Name</label>
                  <input type="text" placeholder="last name" />
                </div>
              </div>
              <div
                className={
                  styles.register__container__right__content__form__email
                }
              >
                <label>Email</label>
                <input type="email" placeholder="email" />
              </div>
              <div
                className={
                  styles.register__container__right__content__form__msg
                }
              >
                <label>Password</label>
                <input type="password" placeholder="password..." />
              </div>
              <div
                className={
                  styles.register__container__right__content__form__msg
                }
              >
                <label>Confirmed password</label>
                <input type="password" placeholder="confirmed password..." />
              </div>

              <div
                className={
                  styles.register__container__right__content__form__btn
                }
              >
                <button>Sign Up</button>
              </div>
              <div
                className={
                  styles.register__container__right__content__form__text
                }
              >
                <p> allready have an account?</p>{" "}
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
