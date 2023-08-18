import React from "react";
import styles from "./Hero.module.scss";
import img from "../../assets/bg.jpg";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 style={{ color: "#e6fcdd" }}>
            “The most beautiful in the world is, of course, the world itself.”{" "}
          </h1>
          {/* <p style={{color:"#e6fcdd"}}>
          Let's come in the beauty of the hills with my tribe, creating unforgattable memories and new advantures
          </p> */}
        </div>
        <div className={styles.img}>
          <img src={img} alt="imng" />
        </div>
      </div>
    </div>
  );
}
