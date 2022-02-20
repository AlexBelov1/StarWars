export interface CharacterState {
  characters: any;
  error: null | string;
  loading: boolean;
  choosenCharacter: any;
  choosenCharacterUrl: string;
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = "FETCH_CHARACTERS",
  FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
  FETCH_CHOSEN_CHARACTER = "FETCH_CHOSEN_CHARACTER",
  ADD_CHOSEN_CHARACTER = "ADD_CHOSEN_CHARACTER",
  SET_CHOSEN_CHARACTER = "SET_CHOSEN_CHARACTER",
}

interface FetchCharacterAction {
  type: CharacterActionTypes.FETCH_CHARACTERS;
}
interface FetchChoosenCharacterAction {
  type: CharacterActionTypes.FETCH_CHOSEN_CHARACTER;
}
interface FetchCharacterAuccessAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: any[];
}
interface FetchCharacterArrorAction {
  type: CharacterActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}
interface SetChosenCharacterAction {
  type: CharacterActionTypes.ADD_CHOSEN_CHARACTER;
  payload: any;
}
interface SetCharacterAction {
  type: CharacterActionTypes.SET_CHOSEN_CHARACTER;
  payload: string;
}

export type CharacterAction =
  | FetchCharacterAction
  | FetchCharacterAuccessAction
  | FetchCharacterArrorAction
  | SetChosenCharacterAction
  | FetchChoosenCharacterAction
  | SetCharacterAction;
