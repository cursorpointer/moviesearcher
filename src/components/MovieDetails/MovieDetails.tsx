import {
  CardImg,
  CardOverview,
  Date,
  Description,
  Genres,
} from "../MoviePreview/MoviePreview.styles";
import {movieAPI} from "../../store/modules/Movies/MoviesQuery";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {addToFavourites, removeFromFavourites} from "../../store/modules/Favourites/slice";
import {MovieDetailsType} from "../../types/types";
import {
  CardImgBlur,
  FavouritesButton,
  Gross,
  Home,
  HomeButton,
  ImgRatingBlock,
  MovieDetailsCard,
  MovieDetailsScreen,
  Rating,
  Runtime,
  TitleShadow
} from "./MovieDetails.styles";
import {formatDate} from "../../utils/formatDate";
import {formatRuntime} from "../../utils/formatRuntime";
import {Question, StyledLink} from "../Main/Main.styles";
import { Title } from "../MovieFetchedList/MovieFetchedList.styles";

export const MovieDetails = ({}) => {
  const dispatch = useAppDispatch();
  const idFromURL = useParams().id;
  const {favourites:{favMovies}} = useAppSelector(state => state);

  const {data} = movieAPI.useFetchDetailsQuery(idFromURL)
  const genres = data?.genres;
  const date = data?.release_date;
  const poster = data?.poster_path;
  const vote = data?.vote_average;
  const duration = data?.runtime;
  const revenue = data?.revenue;
  const overview = data?.overview;
  const title = data?.title;
  const movieID = data?.id

  const isFavourite = favMovies.find(
    (movie: MovieDetailsType) => movie.id === movieID)

  const handleToFavourites = () => {
    isFavourite ?
      dispatch(removeFromFavourites(movieID))
      :
      dispatch(addToFavourites(data));

  }

  return (
    <MovieDetailsScreen>
      <StyledLink to={"/moviesearcher"}>
        <HomeButton>
         <Home />
        </HomeButton>
      </StyledLink>
      <MovieDetailsCard >
        <ImgRatingBlock>
          {poster
            ?
            <>
              <CardImgBlur src={`https://image.tmdb.org/t/p/w500/${poster}`}/>
              <CardImg src={`https://image.tmdb.org/t/p/w500/${poster}`}/>
            </>
            :
            <Question/>
          }
          <Rating>Оценки: {vote}</Rating>
        </ImgRatingBlock>
        <CardOverview>
          <Title>{title}</Title>
          <TitleShadow>{title}</TitleShadow>
          <Date>{formatDate(date)} г.</Date>
          <Genres>{genres && genres[0].name}</Genres>
          <Description overview={overview}>{!overview && "описание отсутствует"} {overview}</Description>
          <Runtime>Продолжительность: {formatRuntime(duration)}</Runtime>
          <Gross>Доход: {revenue}$</Gross>
          <FavouritesButton favourite={isFavourite} fill={isFavourite ? "red" : "#fff"} onClick={handleToFavourites}/>
        </CardOverview>
      </MovieDetailsCard>
    </MovieDetailsScreen>
  )
};
//