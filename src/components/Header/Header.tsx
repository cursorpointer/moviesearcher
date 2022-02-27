import {Filter} from "../Filter/Filter";
import {Search} from "./Search/Search";
import {HeaderWrapper, SearcherModeToggle, ToggleButtonFav, ToggleButtonGen} from "./Header.styles";
import {StyledLink} from "../Main/Main.styles";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {toggleMode} from "../../store/modules/Favourites/toggleFavourites.slice";

export const Header = () => {
  const {toggleFavourites: {favouritesMode}} = useAppSelector(state => state)

  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleMode())
  }
  return (
    <div>
      <HeaderWrapper>
        {!favouritesMode && <Filter/>}
        <SearcherModeToggle>
          <StyledLink to={`/`}>
            <ToggleButtonGen
              disabled={!favouritesMode}
              favouritesmode={favouritesMode}
              onClick={handleToggle}
            > генератор
            </ToggleButtonGen>
          </StyledLink>

          <ToggleButtonFav
            disabled={favouritesMode}
            favouritesmode={favouritesMode}
            onClick={handleToggle}
          > избранное
          </ToggleButtonFav>
        </SearcherModeToggle>
        {!favouritesMode && <Search/>}
      </HeaderWrapper>
    </div>
  );
};

