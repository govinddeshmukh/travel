import React from "react";
import styles from "./Slider.module.scss";
import { useInView } from "react-intersection-observer";
export default function Slider({ img, flipped, title, subtitle }) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  const handelSlider = () => {
    if (!flipped) {
      return (
        <div className={styles.main}>
          <div className={styles.main__img}>
            <img src={img} alt="img" />
          </div>
          <div className={styles.main__content}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.main}>
          <div className={styles.main__content}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className={styles.main__img}>
            <img src={img} alt="img" />
          </div>
        </div>
      );
    }
  };
  return (
    <div className={styles.header}>
      <div
        ref={ref}
        className={
          inView ? `${styles.slider} ${styles.slider_zoom}` : `${styles.slider}`
        }
      >
        {handelSlider()}
      </div>
    </div>
  );
}
