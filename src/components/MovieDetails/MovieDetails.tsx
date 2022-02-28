import {
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
import {CardImg, Title} from "./MovieDetails.styles";
import {toggleMode} from "../../store/modules/Favourites/toggleFavourites.slice";

export const MovieDetails = ({}) => {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const {favourites: {favMovies}} = useAppSelector(state => state);
  const {toggleFavourites: {favouritesMode}} = useAppSelector(state => state);

  const {data} = movieAPI.useFetchDetailsQuery(id)
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
    isFavourite
      ?
      dispatch(removeFromFavourites(movieID))
      :
      dispatch(addToFavourites(data));
  }
  const handleToggle = () => {
    favouritesMode && dispatch(toggleMode()) //при нажатии на кнопку "домой" переключает режим с "избранное" на поисковик
  }

  return (
    <MovieDetailsScreen>

      <StyledLink onClick={handleToggle} to={"/moviesearcher"}>
        <HomeButton>
          <Home/>
        </HomeButton>
      </StyledLink>

      <MovieDetailsCard>
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
          <div style={{display: "flex", gap: "2rem"}}>
            <Title>{title}</Title> <FavouritesButton favourite={isFavourite} fill={isFavourite ? "red" : "#fff"}
                                                     onClick={handleToFavourites}/>
          </div>
          <TitleShadow>{title}</TitleShadow>
          <Date>{formatDate(date)} г.</Date>
          <Genres>{genres && genres[0].name}</Genres>
          <Description overview={overview}>{!overview && "описание отсутствует"} {overview}</Description>
          <Runtime>Продолжительность: {formatRuntime(duration)}</Runtime>
          <Gross>Доход: {revenue}$</Gross>
        </CardOverview>
      </MovieDetailsCard>
    </MovieDetailsScreen>
  )
};
//