import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import styles from "./SpaceshipList.module.css";
import { NavLink } from "react-router-dom";

const SpaceshipList: React.FC = () => {
  const { error, loading, spaceships } = useTypedSelector(
    (state) => state.spaceship
  );
  const { fetchSpaceships, setChoosenSpaceship } = useActions();

  useEffect(() => {
    if (!spaceships?.results?.length) {
      fetchSpaceships();
    }
  }, []);
  console.log(spaceships);

  const onClickAction = (spaceship: any): void => {
    setChoosenSpaceship(spaceship.url);
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.spaceshipList}>
      {spaceships?.results?.map((spaceship: any) => (
        <NavLink
          onClick={() => onClickAction(spaceship)}
          className={styles.spaceship}
          to={`./${spaceship.name}`}
          key={spaceship.name}
        >
          {spaceship.name}
        </NavLink>
      ))}
    </div>
  );
};

export default SpaceshipList;
