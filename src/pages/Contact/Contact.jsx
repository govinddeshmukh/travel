import React from "react";
import styles from "./Contact.module.scss";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__container__left}>
          <div className={styles.contact__container__left__content}>
            <h2>Contact <span style={{color:"red"}}>U</span>s</h2>
            <p>
              Need to get in touch with us? Either fill out the form with your
              inquiry of find the
              <a href="/"> department email</a> you'd like to caontact below
            </p>
          </div>
        </div>
        <div className={styles.contact__container__right}>
          <div className={styles.contact__container__right__content}>
            <form className={styles.contact__container__right__content__form}>
              <div
                className={
                  styles.contact__container__right__content__form__name
                }
              >
                <div
                  className={
                    styles.contact__container__right__content__form__name__first
                  }
                >
                  <label>First Name</label>
                  <input type="text" placeholder="first name" />
                </div>
                <div
                  className={
                    styles.contact__container__right__content__form__name__last
                  }
                >
                  <label>Last Name</label>
                  <input type="text" placeholder="last name" />
                </div>
              </div>
              <div
                className={
                  styles.contact__container__right__content__form__email
                }
              >
                <label>Email</label>
                <input type="email" placeholder="email" />
              </div>
              <div
                className={styles.contact__container__right__content__form__msg}
              >
                <label>What can we help you with?</label>
                <textarea type="text" placeholder="meassage..." />
              </div>

              <div
                className={styles.contact__container__right__content__form__btn}
              >
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
