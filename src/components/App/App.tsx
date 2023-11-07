import { Navigate, Route, Routes } from "react-router-dom";
import MoviesListPage from "../../pages/MoviesListPage";

const App = (): React.ReactElement => (
  <>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<MoviesListPage />} />
    </Routes>
  </>
);

export default App;
