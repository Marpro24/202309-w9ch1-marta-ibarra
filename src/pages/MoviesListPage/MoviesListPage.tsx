import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMoviesActionCreator } from "../../features/movies/moviesSlice";
import useMoviesApi from "../../hooks/useMoviesApi";
import MoviesList from "../../components/MoviesList/MoviesList";
import MoviesListPageStyled from "./MoviesListPageStyled";

const MoviesListPage = (): React.ReactElement => {
  const { getMovies } = useMoviesApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentMovies = await getMovies();

      dispatch(loadMoviesActionCreator(currentMovies));
    })();
  }, [dispatch, getMovies]);

  return (
    <MoviesListPageStyled>
      <header>
        <h1 className="header__title">My favorite horror movies</h1>
      </header>
      <MoviesList />
    </MoviesListPageStyled>
  );
};

export default MoviesListPage;
