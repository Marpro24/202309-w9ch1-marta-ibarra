export interface Movies {
  id: number;
  name: string;
  year: number;
}

export interface MoviesStateStructure {
  movies: Movies[];
}
