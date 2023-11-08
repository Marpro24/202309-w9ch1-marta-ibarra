import { useCallback } from "react";
import { Movies } from "../features/movies/types";

const useMoviesApi = () => {
  const apiURL = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async (): Promise<Movies[]> => {
    const response = await fetch(`${apiURL}/movies`);
    const movies = (await response.json()) as Movies[];

    return movies;
  }, [apiURL]);

  const setWatchMovie = useCallback(
    async (movieId: number, isWatched: boolean): Promise<boolean> => {
      const response = await fetch(`${apiURL}/movies/${movieId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isWatched: !isWatched }),
      });

      if (!response.ok) {
        throw new Error("Sorry, we couldn't process your request");
      }

      return isWatched;
    },
    [apiURL],
  );

  return { getMovies, setWatchMovie };
};

export default useMoviesApi;
