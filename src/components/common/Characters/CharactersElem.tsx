import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "./CharacterList.module.css";

const CharacterElement: React.FC = () => {
  const { fetchChoosenCharacter } = useActions();
  const { error, loading, choosenCharacter, choosenCharacterUrl } =
    useTypedSelector((state) => state.character);

  const { setChoosenFilm } = useActions();
  const [filmListOfCharacter, setFilmListOfCharacter] = useState([]);

  const imgSrc = choosenCharacter.name
    ? require(`../../../assets/image/CharacterImage/${choosenCharacter.name}.jpg`)
    : "";

  const fetchFilmListOfCharacter = (urlList: any) => {
    const responses = urlList.map((el: string) =>
      axios.get(el).then((res) => {
        return res.data;
      })
    );

    Promise.all(responses).then((values: any) => {
      setFilmListOfCharacter(values);
    });
  };

  useEffect(() => {
    fetchChoosenCharacter(choosenCharacterUrl);
  }, []);

  useEffect(() => {
    if (choosenCharacter.name) {
      fetchFilmListOfCharacter(choosenCharacter.films);
    }
  }, [choosenCharacter]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  const onClickAction = (film: any): void => {
    setChoosenFilm(film.url);
  };

  return (
    <div className={styles.characterPage}>
      <div className={styles.characterContent}>
        <div className={styles.characterElem}>
          <span>{`Пол : ${choosenCharacter.gender}`}</span>
          <span>{`Имя : ${choosenCharacter.name}`}</span>
          <span>{`Рост : ${choosenCharacter.height}`}</span>
          <span>{`Вес : ${choosenCharacter.mass}`}</span>
          <span>{`Цвет волос : ${choosenCharacter.hair_color}`}</span>
          <span>{`Цвет кожи : ${choosenCharacter.skin_color}`}</span>
          <span>{`Цвет глаз : ${choosenCharacter.eye_color}`}</span>
        </div>
        <div className={styles.filmList}>
          {filmListOfCharacter.length
            ? filmListOfCharacter.map((film: any) => (
                <NavLink
                  onClick={() => onClickAction(film)}
                  className={styles.film}
                  to={`/films/${film.title}`}
                  key={film.title}
                >
                  {film.title}
                </NavLink>
              ))
            : null}
        </div>
      </div>
      <img className={styles.characterImg} src={imgSrc} alt="character" />
    </div>
  );
};

export default CharacterElement;
