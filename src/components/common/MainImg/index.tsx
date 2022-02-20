import React from "react";
import style from "./MainImg.module.css";

const MainImg: React.FC = () => {
  const imgSrc = require("../../../assets/image/main-logo.jpg");
  return <img className={style.mainImg} src={imgSrc} alt="main-logo" />;
};

export default MainImg;
