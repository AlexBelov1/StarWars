import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "./PlanetList.module.css";

const PlanetElement: React.FC = () => {
  const { error, loading, choosenPlanet, choosenPlanetUrl } = useTypedSelector(
    (state) => state.planet
  );
  const imgSrc = choosenPlanet.name
    ? require(`../../../assets/image/PlanetsImage/${choosenPlanet.name}.jpg`)
    : "";
  const { fetchChoosenPlanet } = useActions();

  const { setChoosenFilm } = useActions();
  const [filmListOfPlanet, setFilmListOfPlanet] = useState([]);

  const fetchFilmListOfPlanet = (urlList: any) => {
    const responses = urlList.map((el: string) =>
      axios.get(el).then((res) => {
        return res.data;
      })
    );

    Promise.all(responses).then((values: any) => {
      setFilmListOfPlanet(values);
    });
  };

  useEffect(() => {
    fetchChoosenPlanet(choosenPlanetUrl);
  }, []);

  useEffect(() => {
    if (choosenPlanet.name) {
      fetchFilmListOfPlanet(choosenPlanet.films);
    }
  }, [choosenPlanet]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const onClickAction = (film: any): void => {
    setChoosenFilm(film.url);
  };

  return (
    <div className={styles.planetPage}>
      <div className={styles.planetContent}>
        <div className={styles.planetElem}>
          <span>{`Название : ${choosenPlanet.name}`}</span>
          <span>{`Диаметр : ${choosenPlanet.diameter}`}</span>
          <span>{`Климат : ${choosenPlanet.climate}`}</span>
          <span>{`Численность населения : ${choosenPlanet.population}`}</span>
          <span>{`Гравитация : ${choosenPlanet.gravity}`}</span>
        </div>
        <div className={styles.filmList}>
          {filmListOfPlanet.length
            ? filmListOfPlanet.map((film: any) => (
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
      <img className={styles.planetImg} src={imgSrc} alt="planet" />
    </div>
  );
};

export default PlanetElement;
