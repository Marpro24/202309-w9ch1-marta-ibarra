import { Navigate, Route, Routes } from "react-router-dom";
import MoviesListPage from "../../pages/MoviesListPage/MoviesListPage";
import AppStyled from "./AppStyled";
import MovieFormPage from "../../pages/MovieFormPage/MovieFormPage";

const App = (): React.ReactElement => (
  <AppStyled>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<MoviesListPage />} />
      <Route path="/movie-form" element={<MovieFormPage />} />
    </Routes>
  </AppStyled>
);

export default App;
