import styled from "styled-components";

const MoviesFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  .form__input {
    padding: 5px;
  }

  .form__label {
    padding: 10px;
  }

  .form__button {
    background-color: #000;
    color: #fff;
    height: 40px;
    width: 90px;
  }
`;

export default MoviesFormStyled;
