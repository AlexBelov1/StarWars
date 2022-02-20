import {
  CharacterAction,
  CharacterActionTypes,
  CharacterState,
} from "../../types/characters";

const initialState: CharacterState = {
  characters: [],
  error: "",
  loading: false,
  choosenCharacter: {},
  choosenCharacterUrl: "",
};
export const characterReducer = (
  state = initialState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return { ...state, loading: true };
    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { ...state, loading: false, characters: action.payload };
    case CharacterActionTypes.FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CharacterActionTypes.FETCH_CHOSEN_CHARACTER:
      return { ...state, loading: true };
    case CharacterActionTypes.ADD_CHOSEN_CHARACTER:
      return { ...state, loading: false, choosenCharacter: action.payload };
    case CharacterActionTypes.SET_CHOSEN_CHARACTER:
      return { ...state, choosenCharacterUrl: action.payload };

    default:
      return state;
  }
};
