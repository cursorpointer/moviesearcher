import {Main} from "../components/Main/Main";
import {Route, Routes} from "react-router-dom";
import {MovieDetails} from "../components/MovieDetails/MovieDetails";
import React from "react";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path={"details/:id"} element={<MovieDetails/>}/>
      </Routes>
    </>
  );
};

