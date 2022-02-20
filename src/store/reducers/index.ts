import { spaceshipReducer } from "./spaceshipReducer";
import { combineReducers } from "redux";
import { planetReducer } from "./planetReducer";
import { characterReducer } from "./characterReducer";
import { filmReducer } from "./filmReducer";

export const rootReducer = combineReducers({
  planet: planetReducer,
  character: characterReducer,
  film: filmReducer,
  spaceship: spaceshipReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
