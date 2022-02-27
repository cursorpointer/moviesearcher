import React from 'react';
import {MovieFetchedList} from "../MovieFetchedList/MovieFetchedList";
import {Header} from "../Header/Header";

export const Main = () => {

  return (
    <div>
      <Header/>
      <MovieFetchedList/>
    </div>
  );
};

