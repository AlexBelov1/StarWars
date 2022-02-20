import {
  PlanetAction,
  PlanetActionTypes,
  PlanetState,
} from "../../types/planets";

const initialState: PlanetState = {
  planets: [],
  error: "",
  loading: false,
  choosenPlanet: {},
  choosenPlanetUrl: "",
};
export const planetReducer = (
  state = initialState,
  action: PlanetAction
): PlanetState => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANETS:
      return { ...state, loading: true };
    case PlanetActionTypes.FETCH_PLANETS_SUCCESS:
      return { ...state, loading: false, planets: action.payload };
    case PlanetActionTypes.FETCH_PLANETS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PlanetActionTypes.FETCH_CHOSEN_PLANET:
      return { ...state, loading: true };
    case PlanetActionTypes.ADD_CHOSEN_PLANET:
      return { ...state, loading: false, choosenPlanet: action.payload };
    case PlanetActionTypes.SET_CHOSEN_PLANET:
      return { ...state, choosenPlanetUrl: action.payload };

    default:
      return state;
  }
};
