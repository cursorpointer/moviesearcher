import {ReleaseDate} from "../Filter/components/ReleaseDate/ReleaseDate";
import {Rating} from "../Filter/components/Rating/Rating";
import React, {useState} from "react";
import {FilterArrow, FilterButton, FilterOptions, FilterWrapper} from "./Filter.styles"
import {Genres} from "../Filter/components/Genres/Genres";
import {GenButton} from "../Filter/Filter.styles";
import {useAppSelector} from "../../hooks/redux";
import {getMoviesFetch} from "../../store/modules/Movies/slice";
import {useDispatch} from "react-redux";
import {filterCollapseAction} from "../../store/modules/Filter/slice";

export const Filter = () => {
  const dispatch = useDispatch()
  const handleFilterToggle = () => {
    dispatch(filterCollapseAction())
  }
  const {filter} = useAppSelector(state => state)
  const handleFetchFilms = () => {
    dispatch(getMoviesFetch(filter))
    handleFilterToggle()
  }
  return (
    <>
      <FilterWrapper>
        <FilterButton onClick={handleFilterToggle}>
          фильтр
          <FilterArrow filtercollapse={filter.filterCollapse ? 1 : 0}></FilterArrow>
        </FilterButton>
        {filter.filterCollapse &&
        <FilterOptions>
          <Genres/>
          <ReleaseDate/>
          <Rating/>
        </FilterOptions>
        }
      </FilterWrapper>
      {filter.filterCollapse &&
      <GenButton onClick={handleFetchFilms}>искать</GenButton>
      }
    </>
  );
};