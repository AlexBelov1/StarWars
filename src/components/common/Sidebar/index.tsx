import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={style["sidebar"]}>
      <NavLink to="/films">Фильмы</NavLink>
      <NavLink to="/characters">Персонажи</NavLink>
      <NavLink to="/planets">Планеты</NavLink>
      <NavLink to="/spaceships">Космические корабли</NavLink>
    </div>
  );
};

export default Sidebar;
