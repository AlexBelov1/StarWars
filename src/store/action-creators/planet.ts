import { Dispatch } from "redux";
import axios from "axios";
import { PlanetAction, PlanetActionTypes } from "../../types/planets";

export const fetchPlanets = () => {
  return async (dispatch: Dispatch<PlanetAction>) => {
    try {
      dispatch({ type: PlanetActionTypes.FETCH_PLANETS });
      const response = await axios.get("https://swapi.dev/api/planets");
      setTimeout(() => {
        dispatch({
          type: PlanetActionTypes.FETCH_PLANETS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANETS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};
export const fetchChoosenPlanet = (url: string) => {
  console.log(url);

  return async (dispatch: Dispatch<PlanetAction>) => {
    try {
      dispatch({ type: PlanetActionTypes.FETCH_CHOSEN_PLANET });
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: PlanetActionTypes.ADD_CHOSEN_PLANET,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PlanetActionTypes.FETCH_PLANETS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};

export const setChoosenPlanet = (url: string) => {
  return async (dispatch: Dispatch<PlanetAction>) => {
    try {
      dispatch({
        type: PlanetActionTypes.SET_CHOSEN_PLANET,
        payload: url,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
