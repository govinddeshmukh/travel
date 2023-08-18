import React from "react";
import styles from "./Footer.module.scss";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.content__box}>
          <div className={styles.content__box__logo}>
            <h2>Travel</h2>
          </div>
          <div>
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sint
              voluptatibus a ut quia repellat, explicabo at debitis vel quidem!
            </h4>
          </div>
          <div className={styles.content__box__socials}>
            <ul>
              <li>
                <a href="/">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <BsGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.content__box}>
          <div>
            <h2>Products</h2>
          </div>
          <div className={styles.content__box__product}>
            <p>Theme Design</p>
            <p>Plugin Design</p>
            <p>Worpress</p>
            <p>Joomala Template</p>
            <p>HTML Template</p>
          </div>
        </div>
        <div className={styles.content__box}>
          <div>
            <h2>Useful Links</h2>
          </div>
          <div className={styles.content__box__product}>
            <p>Blog</p>
            <p>Pricing</p>
            <p>Sales</p>
            <p>Tickets</p>
            <p>Certifications</p>
            <p>Customer Service</p>
          </div>
        </div>
        <div className={styles.content__box}>
          <div>
            <h2>Address</h2>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              rerum sapiente? Esse.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__copy}>
        <p>All rights reserved by @travel 2023</p>
      </div>
    </div>
  );
}
