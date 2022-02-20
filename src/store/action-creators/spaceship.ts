import { Dispatch } from "redux";
import axios from "axios";
import { SpaceshipAction, SpaceshipActionTypes } from "../../types/spaceships";

export const fetchSpaceships = () => {
  return async (dispatch: Dispatch<SpaceshipAction>) => {
    try {
      dispatch({ type: SpaceshipActionTypes.FETCH_SPACESHIPS });
      const response = await axios.get("https://swapi.dev/api/starships/");
      console.log(response.data);

      setTimeout(() => {
        dispatch({
          type: SpaceshipActionTypes.FETCH_SPACESHIPS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: SpaceshipActionTypes.FETCH_SPACESHIPS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};
export const fetchChoosenSpaceship = (url: string) => {
  console.log(url);

  return async (dispatch: Dispatch<SpaceshipAction>) => {
    try {
      dispatch({ type: SpaceshipActionTypes.FETCH_CHOSEN_SPACESHIP });
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: SpaceshipActionTypes.ADD_CHOSEN_SPACESHIP,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: SpaceshipActionTypes.FETCH_SPACESHIPS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};

export const setChoosenSpaceship = (url: string) => {
  return async (dispatch: Dispatch<SpaceshipAction>) => {
    try {
      dispatch({
        type: SpaceshipActionTypes.SET_CHOSEN_SPACESHIP,
        payload: url,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
