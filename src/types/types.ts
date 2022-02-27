import {StyledLink} from "../components/Main/Main.styles";

export interface GenresType {
  id: number;
  name: string;
}

export interface MovieType {
  moviesArray?: any[];
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: any[];
  id: string;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number,
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  genres: GenresType[];
  num?: any;
}

export interface MovieDetailsType extends MovieType {
  vote_average: number;
  runtime: number;
  revenue: number;
}


export interface FavouritesType {
  favMovies: any[];
}

export interface FavouritesToggleType {
  favouritesMode: boolean
}


export interface DescriptionType {
  overview?: string;
}

export interface FavouriteButtonType {
  favourite?: string;
}


export interface FilterType {
  genres: any[];
  date: number;
  rating: number;
  page: number;
  filterCollapse: boolean
}

export interface ReleaseDateButtonType {
  title: string;
  date: number;
}

export interface FilterArrowType {
  datecollapse?: any;
  genrescollapse?: any;
  ratingcollapse?: any;
  filtercollapse?: any;
}

export interface GenresCheckboxType {
  id: number
}

export interface InitialMoviesType {
  movies: MovieType[];
  pages: number;
  status: string;
}

export interface ToggleButtonGenType {
  favouritesmode: boolean;
  disabled: boolean
}

export interface ToggleButtonFavType {
  favouritesmode: boolean;
  disabled: boolean

}

export interface SearchIconType {
  onClick: any
}

export interface MovieListType {
  filterCollapse: boolean
}

export interface DateButtonType {
  onClick: any
}
