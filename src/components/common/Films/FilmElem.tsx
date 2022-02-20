import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "./FilmList.module.css";

const FilmElement: React.FC = () => {
  const { error, loading, choosenFilm, choosenFilmUrl } = useTypedSelector(
    (state) => state.film
  );
  const imgSrc = choosenFilm.episode_id
    ? require(`../../../assets/image/FilmsImage/${choosenFilm.episode_id}.jpg`)
    : "";
  const { fetchChoosenFilm } = useActions();

  useEffect(() => {
    fetchChoosenFilm(choosenFilmUrl);
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.filmPage}>
      <div className={styles.filmElem}>
        <span>{`Название : ${choosenFilm.title}`}</span>
        <span>{`Эпизод : ${choosenFilm.episode_id}`}</span>
        <span>{`Описание : ${choosenFilm.opening_crawl}`}</span>
        <span>{`Режисер : ${choosenFilm.director}`}</span>
        <span>{`Дата выхода : ${choosenFilm.release_date}`}</span>
      </div>
      <img className={styles.filmImg} src={imgSrc} alt="film" />
    </div>
  );
};

export default FilmElement;
