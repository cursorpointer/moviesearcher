import {MovieType} from "../types/types";

export const formatCardNum = (movies:MovieType[], item: MovieType) => {
  const formatNum = movies.indexOf(item) < 9 ? '0' + (movies.indexOf(item) + 1) : movies.indexOf(item) + 1
  return formatNum
}