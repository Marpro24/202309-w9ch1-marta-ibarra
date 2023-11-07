import { Navigate, Route, Routes } from "react-router-dom";
import MoviesListPage from "../../pages/MoviesListPage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => (
  <AppStyled>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<MoviesListPage />} />
    </Routes>
  </AppStyled>
);

export default App;
