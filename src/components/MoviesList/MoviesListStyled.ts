import styled from "styled-components";

const MoviesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .movie-container {
    display: flex;
  }

  @media (min-width: 400px) {
    .movie__container {
      width: 400px;
    }
  }
`;

export default MoviesListStyled;
