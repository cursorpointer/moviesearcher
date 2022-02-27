import {GenresCheckbox} from "./GenresCheckbox";
import {useState} from "react";
import {FilterOption, FilterOptionArrow, FilterOptionWrapper, GenresIcon, GenresOption} from "../../Filter.styles";
import {genresAPI} from "../../../../store/modules/Genres/GenresQuery";
import {GenresType} from "../../../../types/types";

export const Genres = () => {
  const [genresCollapse, setGenresCollapse] = useState(false)
  const {data} = genresAPI.useFetchGenresQuery('ru-RU')
  const handleShowGenres = () => {
    setGenresCollapse(!genresCollapse)
  }

  return (
    <FilterOptionWrapper>
      <FilterOption onClick={handleShowGenres}>
        <GenresIcon/>
        жанры
        <FilterOptionArrow genrescollapse={genresCollapse ? 1 : 0}></FilterOptionArrow>
      </FilterOption>
      {genresCollapse && data.genres.map((item: GenresType) =>
        <GenresOption key={item.id}>
          <span> {item.name} </span>
          <GenresCheckbox id={item.id}/>
        </GenresOption>
      )}

    </FilterOptionWrapper>
  );
};

