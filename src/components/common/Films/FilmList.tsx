import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import styles from "./FilmList.module.css";
import { NavLink } from "react-router-dom";

const FilmList: React.FC = () => {
  const { error, loading, films } = useTypedSelector((state) => state.film);
  const { fetchFilms, setChoosenFilm } = useActions();

  useEffect(() => {
    if (!films?.results?.length) {
      fetchFilms();
    }
  }, []);

  const onClickAction = (film: any): void => {
    setChoosenFilm(film.url);
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.filmList}>
      {films?.results?.map((film: any) => (
        <NavLink
          onClick={() => onClickAction(film)}
          className={styles.film}
          to={`./${film.title}`}
          key={film.title}
        >
          {film.title}
        </NavLink>
      ))}
    </div>
  );
};

export default FilmList;
