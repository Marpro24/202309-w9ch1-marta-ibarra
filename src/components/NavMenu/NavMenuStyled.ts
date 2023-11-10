import styled from "styled-components";

const NavMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;

  .nav-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  .active {
    border-bottom: solid #000;
    padding-bottom: 3px;
  }
`;

export default NavMenuStyled;
