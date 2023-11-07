import { useCallback } from "react";
import { Movies } from "../features/movies/types";

const useMoviesApi = () => {
  const apiURL = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async (): Promise<Movies[]> => {
    const response = await fetch(`${apiURL}/movies`);
    const movies = (await response.json()) as Movies[];

    return movies;
  }, [apiURL]);

  return {
    getMovies,
  };
};

export default useMoviesApi;
