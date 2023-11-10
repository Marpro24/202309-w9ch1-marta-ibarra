import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Movies } from "../../features/movies/types";
import { toggleWatchedMovieActionCreator } from "../../features/movies/moviesSlice";
import MoviesCardStyled from "./MoviesCardStyled";
import useMoviesApi from "../../hooks/useMoviesApi";

interface MoviesProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MoviesProps): React.ReactElement => {
  const dispatch = useDispatch();
  const { setWatchMovie } = useMoviesApi();

  const changeWatchMovie = useCallback(() => {
    setWatchMovie(movie.id, movie.isWatched);
    dispatch(toggleWatchedMovieActionCreator(movie.id));
  }, [dispatch, movie.id, movie.isWatched, setWatchMovie]);

  return (
    <MoviesCardStyled>
      <img
        src={movie.image}
        alt={movie.name}
        className="movie__image"
        width={300}
        height={450}
      />
      <h2 className="movie__title">{movie.name}</h2>
      <span className="movie__year">{`Year: ${movie.year}`}</span>
      <label className="movie__label">
        Watched
        <input
          className="movie__checkbox"
          type="checkbox"
          checked={movie.isWatched}
          onChange={changeWatchMovie}
        />
      </label>
    </MoviesCardStyled>
  );
};

export default MovieCard;
