import { Dispatch } from "redux";
import axios from "axios";
import { FilmAction, FilmActionTypes } from "../../types/films";

export const fetchFilms = () => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_FILMS });
      const response = await axios.get("https://swapi.dev/api/films");
      console.log(response.data);

      setTimeout(() => {
        dispatch({
          type: FilmActionTypes.FETCH_FILMS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};

export const fetchChoosenFilm = (url: string) => {
  console.log(url);

  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_CHOSEN_FILM });
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: FilmActionTypes.ADD_CHOSEN_FILM,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_ERROR,
        payload: "Произошла ошибка при загрузке ",
      });
    }
  };
};

export const setChoosenFilm = (url: string) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({
        type: FilmActionTypes.SET_CHOSEN_FILM,
        payload: url,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
