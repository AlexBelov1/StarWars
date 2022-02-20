import {
  SpaceshipAction,
  SpaceshipActionTypes,
  SpaceshipState,
} from "../../types/spaceships";

const initialState: SpaceshipState = {
  spaceships: [],
  error: "",
  loading: false,
  choosenSpaceship: {},
  choosenSpaceshipUrl: "",
};
export const spaceshipReducer = (
  state = initialState,
  action: SpaceshipAction
): SpaceshipState => {
  switch (action.type) {
    case SpaceshipActionTypes.FETCH_SPACESHIPS:
      return { ...state, loading: true };
    case SpaceshipActionTypes.FETCH_SPACESHIPS_SUCCESS:
      return { ...state, loading: false, spaceships: action.payload };
    case SpaceshipActionTypes.FETCH_SPACESHIPS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SpaceshipActionTypes.FETCH_CHOSEN_SPACESHIP:
      return { ...state, loading: true };
    case SpaceshipActionTypes.ADD_CHOSEN_SPACESHIP:
      return { ...state, loading: false, choosenSpaceship: action.payload };
    case SpaceshipActionTypes.SET_CHOSEN_SPACESHIP:
      return { ...state, choosenSpaceshipUrl: action.payload };

    default:
      return state;
  }
};
