import { useAppSelector } from "../../store/hooks";
import MovieCard from "../MoviesCard/MoviesCard";
import MoviesListStyled from "./MoviesListStyled";

const MoviesList = () => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <MoviesListStyled>
      {movies.map((movie) => (
        <li className="movie-container" key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
