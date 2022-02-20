import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
  const imgSrcVk = require("../../../assets/icon/vk-ico.png");
  const imgSrcInst = require("../../../assets/icon/insta-ico.png");
  const imgSrcTeleg = require("../../../assets/icon/telegram-ico.png");
  return (
    <footer className={style.fullFooter}>
      <div>
        <p>Учебный проект</p>
      </div>
      <div className={style.footerIcon}>
        <a
          href="https://vk.com/id99855858"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={style.icoImg} src={imgSrcVk} alt="vk-icon" />
        </a>
        <a
          href="https://www.instagram.com/alexbel1910/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={style.icoImg} src={imgSrcInst} alt="insta-icon" />
        </a>
        <a
          href="https://t.me/Mosk104"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={style.icoImg} src={imgSrcTeleg} alt="telegram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
