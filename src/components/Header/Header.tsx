import {Filter} from "../Filter/Filter";
import {Search} from "./Search/Search";
import {HeaderWrapper, SearcherModeToggle, ToggleButtonFav, ToggleButtonGen} from "./Header.styles";
import {StyledLink} from "../Main/Main.styles";
import React from "react";
import {useAppSelector} from "../../hooks/redux";
import {useDispatch} from "react-redux";
import {toggleMode} from "../../store/modules/Favourites/toggleFavourites.slice";
import {filterCollapseAction} from "../../store/modules/Filter/slice";

export const Header = () => {
  const {filter:{filterCollapse}} = useAppSelector(state => state)
  const {toggleFavourites: {favouritesMode}} = useAppSelector(state => state)
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleMode())
    filterCollapse && dispatch(filterCollapseAction()) //убирает кнопку "искать", если переключить режим при открытом фильтре
  }

  return (
    <div>
      <HeaderWrapper>
        {!favouritesMode && <Filter/>} {/*в "избранном" не рисуются фильтр и поиск*/}
        <SearcherModeToggle>
          <StyledLink to={`/moviesearcher`}>
            <ToggleButtonGen
              disabled={!favouritesMode}
              favouritesmode={favouritesMode}
              onClick={handleToggle}
            > поисковик
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

