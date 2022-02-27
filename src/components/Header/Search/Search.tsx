import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getMoviesFetch} from "../../../store/modules/Movies/slice";
import {useAppSelector} from "../../../hooks/redux";
import {SearchIcon, SearchInput, SearchWrapper} from "../Header.styles";
import {filterCollapseAction} from "../../../store/modules/Filter/slice";

export const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const {filter: {
    page
  }} = useAppSelector(state => state)
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const searchAction = {
    title: value,
    page: page
  }
  const {filter:{filterCollapse}} = useAppSelector(state => state)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.code ==="Enter" && (value.trim()) && dispatch(getMoviesFetch(searchAction));
    filterCollapse && dispatch(filterCollapseAction())
  }
  const handleClick = () => {
     (value.trim()) && dispatch(getMoviesFetch(searchAction));
     filterCollapse && dispatch(filterCollapseAction())
  }

  useEffect(() => {
    dispatch(getMoviesFetch(searchAction))
  }, [page])

  return (
    <SearchWrapper>
        <SearchInput
          type="text"
          onChange={handleChangeValue}
          onKeyDown={handleKeyDown}
        />
        <SearchIcon onClick={handleClick} />
    </SearchWrapper>
  );
};

