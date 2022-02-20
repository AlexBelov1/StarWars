import { Dispatch } from "redux";
import axios from "axios";
import { CharacterAction, CharacterActionTypes } from "../../types/characters";

export const fetchCharacters = () => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHARACTERS });
      const response = await axios.get("https://swapi.dev/api/people");
      console.log(response.data);

      setTimeout(() => {
        dispatch({
          type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};
export const fetchChoosenCharacter = (url: string) => {
  console.log(url);

  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({ type: CharacterActionTypes.FETCH_CHOSEN_CHARACTER });
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: CharacterActionTypes.ADD_CHOSEN_CHARACTER,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};

export const setChoosenCharacter = (url: string) => {
  return async (dispatch: Dispatch<CharacterAction>) => {
    try {
      dispatch({
        type: CharacterActionTypes.SET_CHOSEN_CHARACTER,
        payload: url,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
