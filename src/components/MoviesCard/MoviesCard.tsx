import React from "react";
import { Movies } from "../../features/movies/types";

interface MoviesProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MoviesProps): React.ReactElement => {
  return (
    <div>
      <h2>{movie.name}</h2>
      <span>{`Year: ${movie.year}`}</span>
    </div>
  );
};

export default MovieCard;
