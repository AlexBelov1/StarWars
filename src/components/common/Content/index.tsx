import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import style from "./Content.module.css";

const Content: React.FC = () => {
  return (
    <div className={style["full-content"]}>
      <Header />
      <div className={style["content"]}>
        <Sidebar />
        <main className={style["main-content"]}>
          {<img src="../../../assets/image/main-logo.jpg" alt="main" /> && (
            <Outlet />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
