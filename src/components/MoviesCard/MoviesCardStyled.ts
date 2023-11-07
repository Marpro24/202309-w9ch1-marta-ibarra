import styled from "styled-components";

const MoviesCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  .movie__image {
    object-fit: contain;
  }

  .movie__title {
    padding: 20px;
  }
`;

export default MoviesCardStyled;
