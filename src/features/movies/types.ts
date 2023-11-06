export interface Movies {
  id: number;
  title: string;
  year: number;
}

export interface MoviesStateStructure {
  movies: Movies[];
}
