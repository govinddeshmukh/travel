import React from "react";
import styles from "./Home.module.scss";
import Hero from "../Hero/Hero";
import Slider from "../../components/Slider/Slider";
import { sliderdata } from "../../data/sliderdata";
import { CustomerData } from "../../data/sliderdata";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.home__textbox}>
        <div className={styles.home__textbox__text}>
          <p>Trending destinations</p>
        </div>
      </div>
      <div>
        {sliderdata.map((slides) => {
          return (
            <div>
              <Slider
                img={slides.img}
                flipped={slides.flipped}
                title={slides.title}
                subtitle={slides.subtitle}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.home__center}>
        <div className={styles.home__center__img}>
          <div className={styles.home__center__img__box}>
            <div className={styles.home__center__img__box__iconBox}>
              <FaMapMarkerAlt
                className={styles.home__center__img__box__iconBox__icon}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              omnis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.home__textbox}>
        <div className={styles.home__textbox__text}>
          <p>Blogs</p>
        </div>
      </div>
      <div className={styles.tags}>
        {CustomerData.map((customer) => {
          return (
            <div className={styles.tags__box}>
              <div className={styles.img}>
                <img src={customer.img} alt="" />
              </div>
              <div>
                <p>{customer.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
