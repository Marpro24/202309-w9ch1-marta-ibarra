import MovieForm from "../../components/MovieForm/MovieForm";

const MovieFormPage = (): React.ReactElement => {
  return (
    <main>
      <header>
        <h1 className="header__title">Add your favorite movie !</h1>
      </header>
      <MovieForm />
    </main>
  );
};

export default MovieFormPage;
