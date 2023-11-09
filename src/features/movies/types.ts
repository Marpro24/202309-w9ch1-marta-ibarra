export interface Movies {
  id: number;
  name: string;
  year: number;
  image: string;
  isWatched: boolean;
}

export interface NoIdMovie {
  name: string;
  year: number;
  image: string;
  isWatched: boolean;
}

export interface MoviesStateStructure {
  movies: Movies[];
}
