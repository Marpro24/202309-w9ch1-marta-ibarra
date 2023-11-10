import styled from "styled-components";

const MoviesCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: solid;
  border-color: #000;
  border-radius: 30px;
  margin: 20px;

  .movie__image {
    object-fit: contain;
  }

  .movie__title {
    padding: 20px;
  }

  .movie__year {
    padding-bottom: 25px;
  }

  .movie__checkbox {
    width: 30px;
    height: 30px;
  }
`;

export default MoviesCardStyled;
