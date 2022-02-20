import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/common/Content";
import CharacterList from "./components/common/Characters/CharacterList";
import CharacterElement from "./components/common/Characters/CharactersElem";
import NotFoundPage from "./components/common/NotFoundPage/indedx";
import PlanetElement from "./components/common/Planets/PlanetElem";
import PlanetList from "./components/common/Planets/PlanetList";
import FilmList from "./components/common/Films/FilmList";
import FilmElement from "./components/common/Films/FilmElem";
import SpaceshipList from "./components/common/Spaceships/SpaceshipList";
import SpaceshipElement from "./components/common/Spaceships/SpaceshipsElem";
import MainImg from "./components/common/MainImg";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route path="/" element={<MainImg />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/planets/:name" element={<PlanetElement />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:name" element={<CharacterElement />} />
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:title" element={<FilmElement />} />
        <Route path="/spaceships" element={<SpaceshipList />} />
        <Route path="/spaceships/:name" element={<SpaceshipElement />} />
      </Route>
    </Routes>
  );
};

export default App;
