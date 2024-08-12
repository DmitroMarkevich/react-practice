import {styled} from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBar = styled.nav`
  height: 40px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  gap: 16px;
  display: flex;
  list-style-type: none;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: pink;
  }
`;
