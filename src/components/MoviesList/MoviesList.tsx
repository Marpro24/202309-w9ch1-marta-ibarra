import { useAppSelector } from "../../store/hooks";

const MoviesList = () => {
  const movies = useAppSelector((state) => state.moviesState.movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <span>{movie.name}</span>
          <span>{movie.year}</span>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
