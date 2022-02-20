import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import styles from "./CharacterList.module.css";
import { NavLink } from "react-router-dom";

const CharacterList: React.FC = () => {
  const { error, loading, characters } = useTypedSelector(
    (state) => state.character
  );
  const { fetchCharacters, setChoosenCharacter } = useActions();

  useEffect(() => {
    if (!characters?.results?.length) {
      fetchCharacters();
    }
  }, []);
  console.log(characters);

  const onClickAction = (character: any): void => {
    setChoosenCharacter(character.url);
  };

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.characterList}>
      {characters?.results?.map((character: any) => (
        <NavLink
          onClick={() => onClickAction(character)}
          className={styles.character}
          to={`./${character.name}`}
          key={character.name}
        >
          {character.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CharacterList;
