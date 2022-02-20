import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "./SpaceshipList.module.css";

const SpaceshipElement: React.FC = () => {
  const { error, loading, choosenSpaceship, choosenSpaceshipUrl } =
    useTypedSelector((state) => state.spaceship);
  const imgSrc = choosenSpaceship.name
    ? require(`../../../assets/image/SpaceshipsImage/${choosenSpaceship.name}.png`)
    : "";
  const { fetchChoosenSpaceship } = useActions();

  const { setChoosenFilm } = useActions();
  const [filmListOfSpaceship, setFilmListOfSpaceship] = useState([]);

  const fetchFilmListOfSpaceship = (urlList: any) => {
    const responses = urlList.map((el: string) =>
      axios.get(el).then((res) => {
        return res.data;
      })
    );

    Promise.all(responses).then((values: any) => {
      setFilmListOfSpaceship(values);
    });
  };

  useEffect(() => {
    fetchChoosenSpaceship(choosenSpaceshipUrl);
  }, []);

  useEffect(() => {
    if (choosenSpaceship.name) {
      fetchFilmListOfSpaceship(choosenSpaceship.films);
    }
  }, [choosenSpaceship]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  const onClickAction = (film: any): void => {
    setChoosenFilm(film.url);
  };

  return (
    <div className={styles.spaceshipPage}>
      <div className={styles.spaceshipContent}>
        <div className={styles.spaceshipElem}>
          <span>{`Имя : ${choosenSpaceship.name}`}</span>
          <span>{`Модель : ${choosenSpaceship.model}`}</span>
          <span>{`Производитель : ${choosenSpaceship.manufacturer}`}</span>
          <span>{`Цена : ${choosenSpaceship.cost_in_credits} кредитов`}</span>
          <span>{`Длина : ${choosenSpaceship.length}`}</span>
          <span>{`Максимальная скорость : ${choosenSpaceship.max_atmosphering_speed}`}</span>
          <span>{`Экипаж : ${choosenSpaceship.crew}`}</span>
          <span>{`Число пассажиров : ${choosenSpaceship.passengers}`}</span>
          <span>{`Класс корабля : ${choosenSpaceship.starship_class}`}</span>
        </div>
        <div className={styles.filmList}>
          {filmListOfSpaceship.length
            ? filmListOfSpaceship.map((film: any) => (
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
      <img className={styles.spaceshipImg} src={imgSrc} alt="spaceship" />
    </div>
  );
};

export default SpaceshipElement;
