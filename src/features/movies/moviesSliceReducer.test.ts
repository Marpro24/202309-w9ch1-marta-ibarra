import filmsMock from "../../mocks/filmMocks";
import { moviesReducer, toggleWatchedMovieActionCreator } from "./moviesSlice";
import {} from "./moviesSlice";

describe("Given a movies reducer", () => {
  describe("When it receives an unwatched Alien movie and an unwatched Get Out movie and an action to set Alien to watched", () => {
    test("Then it should show Alien watched and Get Out unwatched", () => {
      const currentMoviesState = {
        movies: filmsMock,
      };

      const toggledMovie = currentMoviesState.movies[3].id;
      const expectedNewWatchedState = !currentMoviesState.movies[3].isWatched;

      const newMovieState = moviesReducer(
        currentMoviesState,
        toggleWatchedMovieActionCreator(toggledMovie),
      );
      const isWatchedMovie = newMovieState.movies[3].isWatched;

      expect(expectedNewWatchedState).toStrictEqual(isWatchedMovie);
    });
  });
});
