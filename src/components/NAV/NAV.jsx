import React, { useEffect, useState, useRef } from "react";
import styles from "./NAV.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

// const links = ["Home","About","Contact","Blog"]
export default function NAV() {
  const [open, setopen] = useState(false);

  const handelmenu = () => {
    setopen((p) => !p);
  };
  const [transparent, settransparent] = useState(`${styles.header}`);
  const [Color, setColor] = useState(`${styles.a}`);
  const [logocolor, setlogocolor] = useState(`${styles.header__content__logo}`);
  const [Black, setBlack] = useState(false);

  const bg = () => {
    if (window.scrollY >= 15) {
      settransparent(`${styles.header} ${styles.bg}`);
    } else {
      settransparent(`${styles.header}`);
    }
  };

  const color = () => {
    if (window.scrollY >= 15) {
      setColor(`${styles.a} ${styles.white}`);
      setlogocolor(`${styles.header__content__logo} ${styles.white}`);
      setBlack(true);
    } else {
      setColor(`${styles.a}`);
      setlogocolor(`${styles.header__content__logo}`);
      setBlack(false);
    }
  };

  window.addEventListener("scroll", bg);
  window.addEventListener("scroll", color);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref?.current?.contains(event.target)) {
        setopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className={transparent}>
      <div
        style={{ color: Black ? "black" : "#e6fcdd" }}
        className={styles.header__content}
      >
        <div
          style={{ color: Black ? "#0e180e" : "#e6fcdd" }}
          className={logocolor}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: Black ? "#0e180e" : "#e6fcdd",
            }}
          >
            <h2>
              <span style={{ color: "red" }}>T</span>ravel
            </h2>
          </Link>
        </div>
        <nav
          style={{ background: Black ? "#e6fcdd" : "" }}
          className={
            open
              ? `${styles.header__content__nav} ${styles.active}`
              : `${styles.header__content__nav}`
          }
        >
          <ul className={styles.header__content__nav__item}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <a
                  style={{ color: Black ? "#0e180e" : "#e6fcdd" }}
                  className={Color}
                  href="/"
                >
                  Home
                </a>
              </li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>
                <a
                  style={{ color: Black ? "#0e180e" : "#e6fcdd" }}
                  className={Color}
                  href="/"
                >
                  About
                </a>
              </li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li>
                <a
                  style={{ color: Black ? "#0e180e" : "#e6fcdd" }}
                  className={Color}
                  href="/"
                >
                  Contact
                </a>
              </li>
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <li>
                <a
                  style={{ color: Black ? "#0e180e" : "#e6fcdd" }}
                  className={Color}
                  href="/"
                >
                  Blog
                </a>
              </li>
            </Link>
          </ul>
          <Link to="/login">
            <button
              style={{
                color: Black ? "black" : "#e6fcdd",
                borderColor: Black ? "black" : "#e6fcdd",
              }}
            >
              Login
            </button>
          </Link>
        </nav>
        <div className={styles.header__content__menu}>
          {open ? (
            <FiX onClick={handelmenu} />
          ) : (
            <FiMenu onClick={handelmenu} />
          )}
        </div>
      </div>
    </div>
  );
}
