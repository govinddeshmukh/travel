import React from "react";
import styles from "./About.module.scss";
import img from "../../assets/mountain.jpg";
import { CustomerData } from "../../data/sliderdata";
import { BsArrowRight } from "react-icons/bs";
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <div className={styles.content__header__content}>
            <div className={styles.content__header__content__text}>
              <h1>About <span style={{color:"red"}}>U</span>s</h1>
            </div>
            <p>
              <span>Travel</span> is India’s leading online travel booking brand
              providing range of choice for hotels, flights, trains, bus and
              cars for travelers. Our core value differentiator is the most
              trusted user experience, be it in terms of quickest search and
              booking, fastest payments, settlement or refund processes. Through
              GoStays, our customers enjoy standardised stay experience at
              certified hotel properties. With industry first virtual travel
              booking currency GoCash and travel social network, GoCash+ Rewards
              – Travel is the number one choice for new India on the move.
            </p>
          </div>
          <div className={styles.content__header__img}>
            <div className={styles.content__header__img__image}>
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
        <div className={styles.content__text}>
          <div className={styles.content__text__content}>
            <h1>Our Happy Customers</h1>
          </div>
        </div>
        <div className={styles.content__footer}>
          <div className={styles.content__footer__content}>
            {CustomerData.map((data) => {
              return (
                <div className={styles.content__footer__content__box}>
                  <div
                    className={styles.content__footer__content__box__content}
                  >
                    <img src={data.img} alt="" />
                    <p>{data.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.content__btn}>
          <button>Contact Us</button>
          <BsArrowRight className={styles.content__btn__arrow} />
        </div>
      </div>
    </div>
  );
}
