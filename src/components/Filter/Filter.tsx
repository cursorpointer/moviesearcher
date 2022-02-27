import {ReleaseDate} from "../Filter/components/ReleaseDate/ReleaseDate";
import {Rating} from "../Filter/components/Rating/Rating";
import React from "react";
import {FilterArrow, FilterButton, FilterOptions, FilterWrapper} from "./Filter.styles"
import {Genres} from "../Filter/components/Genres/Genres";
import {useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {filterCollapseAction} from "../../store/modules/Filter/slice";

export const Filter = () => {
  const dispatch = useDispatch()
  const handleFilterToggle = () => {
    dispatch(filterCollapseAction())
  }
  const {filter} = useAppSelector(state => state)

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
    </>
  );
};