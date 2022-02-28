import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getMoviesFetch} from "../../../store/modules/Movies/slice";
import {useAppSelector} from "../../../hooks/redux";
import {SearchIcon, SearchInput, SearchWrapper} from "../Header.styles";
import {filterCollapseAction} from "../../../store/modules/Filter/slice";

export const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const {filter: {page, filterCollapse}} = useAppSelector(state => state)
  const searchActionPayload = {
    title: value,
    page: page
  }
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.code === "Enter" && (value.trim()) && dispatch(getMoviesFetch(searchActionPayload));
    filterCollapse && dispatch(filterCollapseAction()) //закрывает фильтр, если он открыт
  }
  const handleClick = () => {
    (value.trim()) && dispatch(getMoviesFetch(searchActionPayload));
    filterCollapse && dispatch(filterCollapseAction())
  }

  useEffect(() => {
    dispatch(getMoviesFetch(searchActionPayload))
  }, [page])

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon onClick={handleClick}/>
    </SearchWrapper>
  );
};

