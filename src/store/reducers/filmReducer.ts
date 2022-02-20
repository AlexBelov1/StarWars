import { FilmAction, FilmActionTypes, FilmState } from "../../types/films";

const initialState: FilmState = {
  films: [],
  error: "",
  loading: false,
  choosenFilm: {},
  choosenFilmUrl: "",
};
export const filmReducer = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    case FilmActionTypes.FETCH_FILMS:
      return { ...state, loading: true };
    case FilmActionTypes.FETCH_FILMS_SUCCESS:
      return { ...state, loading: false, films: action.payload };
    case FilmActionTypes.FETCH_FILMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FilmActionTypes.FETCH_CHOSEN_FILM:
      return { ...state, loading: true };
    case FilmActionTypes.ADD_CHOSEN_FILM:
      return { ...state, loading: false, choosenFilm: action.payload };
    case FilmActionTypes.SET_CHOSEN_FILM:
      return { ...state, choosenFilmUrl: action.payload };

    default:
      return state;
  }
};
