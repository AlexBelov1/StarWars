export interface SpaceshipState {
  spaceships: any;
  error: null | string;
  loading: boolean;
  choosenSpaceship: any;
  choosenSpaceshipUrl: string;
}

export enum SpaceshipActionTypes {
  FETCH_SPACESHIPS = "FETCH_SPACESHIPS",
  FETCH_SPACESHIPS_SUCCESS = "FETCH_SPACESHIPS_SUCCESS",
  FETCH_SPACESHIPS_ERROR = "FETCH_SPACESHIPS_ERROR",
  SET_CHOSEN_SPACESHIP = "SET_CHOSEN_SPACESHIP",
  FETCH_CHOSEN_SPACESHIP = "FETCH_CHOSEN_SPACESHIP",
  ADD_CHOSEN_SPACESHIP = "ADD_CHOSEN_SPACESHIP",
}

interface FetchSpaceshipAction {
  type: SpaceshipActionTypes.FETCH_SPACESHIPS;
}
interface FetchChoosenSpaceshipAction {
  type: SpaceshipActionTypes.FETCH_CHOSEN_SPACESHIP;
}
interface SetSpaceshipAction {
  type: SpaceshipActionTypes.SET_CHOSEN_SPACESHIP;
  payload: string;
}
interface FetchSpaceshipAuccessAction {
  type: SpaceshipActionTypes.FETCH_SPACESHIPS_SUCCESS;
  payload: any[];
}
interface FetchSpaceshipArrorAction {
  type: SpaceshipActionTypes.FETCH_SPACESHIPS_ERROR;
  payload: string;
}
interface SetChosenSpaceshipAction {
  type: SpaceshipActionTypes.ADD_CHOSEN_SPACESHIP;
  payload: any;
}

export type SpaceshipAction =
  | FetchSpaceshipAction
  | FetchSpaceshipAuccessAction
  | FetchSpaceshipArrorAction
  | SetChosenSpaceshipAction
  | FetchChoosenSpaceshipAction
  | SetSpaceshipAction;
