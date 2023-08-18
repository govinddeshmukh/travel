import React from "react";
import styles from "./Blog.module.scss";
import { BlogData } from "../../data/sliderdata";
export default function Blog() {
  return (
    <div className={styles.blog}>
      <div className={styles.blog__container}>
        <div className={styles.blog__container__header}>
          <h2>
            Let's explore the world with 
             <span style={{ color: "red"}}> U</span>s
          </h2>
        </div>
        <div className={styles.blog__container__footer}>
          <div className={styles.blog__container__footer__content}>
            {BlogData.map((blog) => {
              return (
                <div className={styles.blog__container__footer__content__box}>
                  <div
                    className={
                      styles.blog__container__footer__content__box__img
                    }
                  >
                    <img src={blog.img} alt="" />
                  </div>
                  <div
                    className={
                      styles.blog__container__footer__content__box__desc
                    }
                  >
                    <p>{blog.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
