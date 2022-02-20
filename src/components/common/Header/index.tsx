import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const imgSrc = require("../../../assets/icon/logo.png");
  return (
    <div className={style["header"]}>
      <img className={style.headerImg} src={imgSrc} alt="headerLogo" />
    </div>
  );
};

export default Header;
