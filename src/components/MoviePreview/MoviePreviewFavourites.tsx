import React, {FC} from "react";
import {MovieType} from "../../types/types";
import {CardImg, CardNum, CardOverview, Description,  Date, Genres, MoviePreviewFavouritesCard} from "./MoviePreview.styles";
import {Question, StyledLink} from "../Main/Main.styles";
import {Title} from "../MovieDetails/MovieDetails.styles";

export const MoviePreviewFavourites:FC<MovieType> = ({
                                                       id,
                                                       title,
                                                       poster_path,
                                                       overview,
                                                       release_date,
                                                       genres,
                                                       num,
                                                     }) => {
  return (
    <div>
      <MoviePreviewFavouritesCard>
        {poster_path
          ?
          <StyledLink to={`/moviesearcher/details/${id}`}>
            <CardImg src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
          </StyledLink>

          :
          <StyledLink to={`/moviesearcher/details/${id}`}><Question/> </StyledLink>
        }
        <CardOverview>
          <StyledLink to={`/moviesearcher/details/${id}`}> <Title>{title}</Title> </StyledLink>
          <Date>{release_date} г.</Date>
          <Genres>{genres && genres[0].name}</Genres>
          <Description overview={overview}>{!overview && "Описание отсутствует"} {overview}</Description>
        </CardOverview>
        <CardNum>{num}</CardNum>
      </MoviePreviewFavouritesCard>

    </div>
  );
};

