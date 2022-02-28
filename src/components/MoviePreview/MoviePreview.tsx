import {MovieType} from "../../types/types";
import React, {FC} from "react";
import {
  CardImg,
  CardOverview,
  Description,
  MoviePreviewCard,
  Title,
  Date,
  CardNum,
  Genres
} from "./MoviePreview.styles";
import {Question, StyledLink} from "../Main/Main.styles";

export const MoviePreview: FC<MovieType> = ({
                                              id,
                                              title,
                                              poster_path,
                                              overview,
                                              release_date,
                                              genres,
                                              num,
                                            }) => {
  return (
    <MoviePreviewCard>
      {poster_path
        ?
        <StyledLink to={`/moviesearcher/details/${id}`}>
          <CardImg src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
        </StyledLink>
        :
        <StyledLink to={`/moviesearcher/details/${id}`}> <Question/> </StyledLink>
      }
      <StyledLink to={`/moviesearcher/details/${id}`}> <Title>{title} </Title> </StyledLink>
    </MoviePreviewCard>
  );
};

