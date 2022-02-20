/* eslint-disable import/no-anonymous-default-export */
import * as PlanetActionCreators from "./planet";
import * as CharacterActionCreators from "./character";
import * as FilmActionCreators from "./film";
import * as SpaceshipActionCreators from "./spaceship";

export default {
  ...PlanetActionCreators,
  ...CharacterActionCreators,
  ...FilmActionCreators,
  ...SpaceshipActionCreators,
};
