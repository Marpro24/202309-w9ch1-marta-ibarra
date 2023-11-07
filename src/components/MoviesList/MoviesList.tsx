import { useAppSelector } from "../../store/hooks";
import MovieCard from "../MoviesCard/MoviesCard";

const MoviesList = () => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
