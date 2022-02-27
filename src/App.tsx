import React from 'react';
import {Routes, Route} from "react-router-dom";
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import {Main} from "./components/Main/Main";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"details/:id"} element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
