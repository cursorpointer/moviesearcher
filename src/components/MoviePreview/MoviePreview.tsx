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
            <>
              <CardImg src={`https://image.tmdb.org/t/p/w400/${poster_path}`}/>
            </>
            :
            <Question/>
          }
          <CardOverview>
            <StyledLink to={`/moviesearcher/details/${id}`}> <Title>{title}</Title> </StyledLink>
            <Date>{release_date} г.</Date>
            <Genres>{genres && genres[0].name}</Genres>
            <Description overview={overview}>{!overview && "Описание отсутствует"} {overview}</Description>
          </CardOverview>
          <CardNum>{num}</CardNum>
        </MoviePreviewCard>
  );
};

