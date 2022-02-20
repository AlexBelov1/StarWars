export interface FilmState {
  films: any;
  error: null | string;
  loading: boolean;
  choosenFilm: any;
  choosenFilmUrl: string;
}

export enum FilmActionTypes {
  FETCH_FILMS = "FETCH_FILMS",
  FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS",
  FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR",
  SET_CHOSEN_FILM = "SET_CHOSEN_FILM",
  FETCH_CHOSEN_FILM = "FETCH_CHOSEN_FILM",
  ADD_CHOSEN_FILM = "ADD_CHOSEN_FILM",
}

interface FetchFilmAction {
  type: FilmActionTypes.FETCH_FILMS;
}
interface FetchChoosenFilmAction {
  type: FilmActionTypes.FETCH_CHOSEN_FILM;
}
interface SetFilmAction {
  type: FilmActionTypes.SET_CHOSEN_FILM;
  payload: string;
}
interface FetchFilmAuccessAction {
  type: FilmActionTypes.FETCH_FILMS_SUCCESS;
  payload: any[];
}
interface FetchFilmArrorAction {
  type: FilmActionTypes.FETCH_FILMS_ERROR;
  payload: string;
}
interface SetChosenFilmAction {
  type: FilmActionTypes.ADD_CHOSEN_FILM;
  payload: any;
}

export type FilmAction =
  | FetchFilmAction
  | FetchFilmAuccessAction
  | FetchFilmArrorAction
  | SetChosenFilmAction
  | FetchChoosenFilmAction
  | SetFilmAction;
