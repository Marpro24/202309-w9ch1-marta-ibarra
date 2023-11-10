import MoviesFormStyled from "./MovieFormStyled";

const movieForm = (): React.ReactElement => {
  return (
    <MoviesFormStyled className="form">
      <label className="form__label" htmlFor="title">
        Title:
      </label>
      <input className="form__input" type="text" id="title" required />
      <label className="form__label" htmlFor="year">
        Year:
      </label>
      <input className="form__input" type="number" id="year" required />
      <label className="form__label" htmlFor="image">
        Add and image:
      </label>
      <input className="form__input" type="url" id="website" required />
      <label className="form__label" htmlFor="watched">
        Have you seen it?
      </label>
      <input type="checkbox" id="watched" required />
      <button className="form__button" type="submit">
        Send
      </button>
    </MoviesFormStyled>
  );
};

export default movieForm;
