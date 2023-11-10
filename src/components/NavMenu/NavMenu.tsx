import { NavLink } from "react-router-dom";
import NavMenuStyled from "./NavMenuStyled";

const NavMenu = (): React.ReactElement => {
  return (
    <NavMenuStyled>
      <ul className="nav-menu">
        <li>
          <NavLink to="/movies">Home </NavLink>
        </li>
        <li>
          <NavLink to="/movie-form">Add a Movie</NavLink>
        </li>
      </ul>
    </NavMenuStyled>
  );
};

export default NavMenu;
