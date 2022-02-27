import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";

function App() {

  return (
    <div>
      <Routes>
        <Route path={"/moviesearcher"} element={<Main/>}/>
        <Route path={"/moviesearcher/details/:id"} element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
