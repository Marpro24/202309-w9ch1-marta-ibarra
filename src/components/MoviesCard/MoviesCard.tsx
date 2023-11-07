import React from "react";
import { Movies } from "../../features/movies/types";
import MoviesCardStyled from "./MoviesCardStyled";

interface MoviesProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MoviesProps): React.ReactElement => {
  return (
    <MoviesCardStyled>
      <img src={movie.image} alt={`${movie.name}`} className="movie__image" />
      <h2 className="movie__title">{movie.name}</h2>
      <span>{`Year: ${movie.year}`}</span>
    </MoviesCardStyled>
  );
};

export default MovieCard;
