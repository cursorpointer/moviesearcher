import React, {useEffect} from "react";
import {MoviePreview} from "../MoviePreview/MoviePreview";
import {MovieType} from "../../types/types";
import {useState} from "react";
import {Paginate} from "react-hot-pagination";
import {useAppSelector} from "../../hooks/redux";
import {getMoviesFetch} from "../../store/modules/Movies/slice";
import {useDispatch} from "react-redux";
import {filterPage} from "../../store/modules/Filter/slice";
import {formatCardNum} from "../../utils/formatNum";
import {Question} from "../Main/Main.styles";
import {MovieFetchedListListWrapper, MovieList} from "./MovieFetchedList.styles";


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

  return (
    <MovieFetchedListListWrapper>
      <MovieList filterCollapse={filter.filterCollapse}>
        {!movies.length && !favouritesMode && <Question/>}
        {!favouritesMode && movies.map((item: MovieType) =>
          (item.title === "UNdefined")
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
        {favouritesMode && favMovies.map((item: MovieType) =>
          <MoviePreview
            key={item.id}
            title={item.title}
            overview={item.overview}
            genres={item.genres}
            poster_path={item.poster_path}
            id={item.id}
            release_date={item.release_date}
            num={formatCardNum(favMovies, item)}
          >
          </MoviePreview>
        )}
        {(movies.length > 1) || favouritesMode
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
      </MovieList>
    </MovieFetchedListListWrapper>
  );
};
//








