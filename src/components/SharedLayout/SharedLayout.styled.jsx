import {styled} from "styled-components";
import {NavLink} from "react-router-dom";

export const NavBar = styled.nav`
  position: fixed;
  background-color: #4CAF50;
  height: 60px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-family: 'Georgia', serif;
`;

export const NavList = styled.ul`
  gap: 16px;
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: 'Georgia', serif;

  &.active {
    background-color: #FFD700;
    color: #4CAF50;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fffacd;
  }
`;

export const Footer = styled.footer`
  background-color: #4CAF50;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px 15px 0 0;
  font-family: 'Georgia', serif;
`;

export const FooterText = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 300;
  margin: 0;
  color: #fff;
`;
