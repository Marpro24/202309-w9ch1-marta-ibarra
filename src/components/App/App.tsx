import { Navigate, Route, Routes } from "react-router-dom";
import MoviesListPage from "../../pages/MoviesListPage";

const App = (): React.ReactElement => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<MoviesListPage />} />
    </Routes>
  </div>
);

export default App;
