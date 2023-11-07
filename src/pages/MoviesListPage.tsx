import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadMoviesActionCreator } from "../features/movies/moviesSlice";
import useMoviesApi from "../hooks/useMoviesApi";

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
    <main>
      <header className="header__title">
        <h1>My favorite horror movies</h1>
      </header>
    </main>
  );
};

export default MoviesListPage;
