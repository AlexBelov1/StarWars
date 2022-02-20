import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import styles from "./PlanetList.module.css";
import { NavLink } from "react-router-dom";

const PlanetList: React.FC = () => {
  const { error, loading, planets } = useTypedSelector((state) => state.planet);
  const { fetchPlanets, setChoosenPlanet } = useActions();

  useEffect(() => {
    if (!planets?.results?.length) {
      fetchPlanets();
    }
  }, []);

  const onClickAction = (planet: any): void => {
    setChoosenPlanet(planet.url);
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.planetList}>
      {planets?.results?.map((planet: any) => (
        <NavLink
          onClick={() => onClickAction(planet)}
          className={styles.planet}
          to={`./${planet.name}`}
          key={planet.name}
        >
          {planet.name}
        </NavLink>
      ))}
    </div>
  );
};

export default PlanetList;
