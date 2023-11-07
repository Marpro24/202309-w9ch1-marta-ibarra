export interface Movies {
  id: number;
  name: string;
  year: number;
  image: string;
}

export interface MoviesStateStructure {
  movies: Movies[];
}
