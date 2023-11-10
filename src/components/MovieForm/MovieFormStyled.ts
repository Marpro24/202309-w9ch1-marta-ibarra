import styled from "styled-components";

const MoviesFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 35px;
  display: flex;
  flex-direction: column;
  border: solid;
  border-color: #000;
  border-radius: 30px;
  padding: 30px;

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
    border-radius: 30px;
    border-color: #000;
  }
`;

export default MoviesFormStyled;
