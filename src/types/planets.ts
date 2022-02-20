export interface PlanetState {
  planets: any;
  error: null | string;
  loading: boolean;
  choosenPlanet: any;
  choosenPlanetUrl: string;
}

export enum PlanetActionTypes {
  FETCH_PLANETS = "FETCH_PLANETS",
  FETCH_PLANETS_SUCCESS = "FETCH_PLANETS_SUCCESS",
  FETCH_PLANETS_ERROR = "FETCH_PLANETS_ERROR",
  SET_CHOSEN_PLANET = "SET_CHOSEN_PLANET",
  FETCH_CHOSEN_PLANET = "FETCH_CHOSEN_PLANET",
  ADD_CHOSEN_PLANET = "ADD_CHOSEN_PLANET",
}

interface FetchPlanetAction {
  type: PlanetActionTypes.FETCH_PLANETS;
}
interface FetchChoosenPlanetAction {
  type: PlanetActionTypes.FETCH_CHOSEN_PLANET;
}
interface SetPlanetAction {
  type: PlanetActionTypes.SET_CHOSEN_PLANET;
  payload: string;
}
interface FetchPlanetAuccessAction {
  type: PlanetActionTypes.FETCH_PLANETS_SUCCESS;
  payload: any[];
}
interface FetchPlanetArrorAction {
  type: PlanetActionTypes.FETCH_PLANETS_ERROR;
  payload: string;
}
interface SetChosenPlanetAction {
  type: PlanetActionTypes.ADD_CHOSEN_PLANET;
  payload: any;
}

export type PlanetAction =
  | FetchPlanetAction
  | FetchPlanetAuccessAction
  | FetchPlanetArrorAction
  | SetChosenPlanetAction
  | FetchChoosenPlanetAction
  | SetPlanetAction;
