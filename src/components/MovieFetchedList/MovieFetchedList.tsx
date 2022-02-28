import React, {useEffect} from "react";
import {MoviePreview} from "../MoviePreview/MoviePreview";
import {MovieType} from "../../types/types";
import {useState} from "react";
import {Paginate} from "react-hot-pagination";
import {useAppSelector} from "../../hooks/redux";
import {getMoviesFetch} from "../../store/modules/Movies/slice";
import {useDispatch} from "react-redux";
import {filterCollapseAction, filterPage} from "../../store/modules/Filter/slice";
import {formatCardNum} from "../../utils/formatNum";
import {Question} from "../Main/Main.styles";
import {FilterSubmitButton, MovieFetchedListListWrapper, MovieList} from "./MovieFetchedList.styles";
import {MoviePreviewFavourites} from "../MoviePreview/MoviePreviewFavourites";

export const MovieFetchedList = () => {
  const {toggleFavourites: {favouritesMode}} = useAppSelector(state => state)
  const {
    fetchedMovies: {
      movies,
      pages,
    }
  } = useAppSelector(state => state)
  const totalPages = pages
  const [page, setPage] = useState(1)
  const handlePagination = (page: number) => {
    setPage(page);
    dispatch(filterPage(page))
  }

  const {filter} = useAppSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesFetch(filter))
  }, [page])

  const {
    favourites: {
      favMovies,
    }
  } = useAppSelector(state => state)
  const handleFetchFilms = () => {
    dispatch(getMoviesFetch(filter))
    dispatch(filterCollapseAction())
  }
  return (
    <MovieFetchedListListWrapper>
      {filter.filterCollapse &&
        <FilterSubmitButton onClick={handleFetchFilms}>искать</FilterSubmitButton> //при открытии фильтра появляется кнопка искать
      }

      <MovieList filterCollapse={filter.filterCollapse}>
        {!movies.length && !favouritesMode && <Question/>} {/*при пустом массиве фильмов показывает анимацию с вопросом*/}

        {!favouritesMode && movies.map((item: MovieType) =>
          (item.title === "UNdefined") //из-за useEffect в массив фильмов приходит UNdefined фильм и рисуется пидарас такой
            ?
            <Question key={item.id}></Question>
            :
            <MoviePreview
              key={item.id}
              title={item.title}
              overview={item.overview}
              genres={item.genres}
              poster_path={item.poster_path}
              id={item.id}
              release_date={item.release_date}
              num={formatCardNum(movies, item)}
            >
            </MoviePreview>
        )}
      </MovieList>

      {favouritesMode && favMovies.map((item: MovieType) => // если переключатель на "избранном", рисуются фильмы оттуда
        <MoviePreviewFavourites
          key={item.id}
          title={item.title}
          overview={item.overview}
          genres={item.genres}
          poster_path={item.poster_path}
          id={item.id}
          release_date={item.release_date}
          num={formatCardNum(favMovies, item)}
        >
        </MoviePreviewFavourites>
      )}

      {(movies.length > 1) && !favouritesMode || favouritesMode && favMovies.length > 15 //чтобы пагинация не появлялась без фильмов
        ?
        <Paginate
          current={page}
          handlePagination={handlePagination}
          range={1}
          total={totalPages}
          components={{}}
        />
        : null
      }
    </MovieFetchedListListWrapper>
  );
};
//








