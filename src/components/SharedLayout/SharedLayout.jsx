import { Outlet } from "react-router-dom";
import { NavList, NavLinkStyled, NavBar, FooterText, Footer } from "./SharedLayout.styled";
import React, { Suspense } from "react";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <NavBar>
          <NavList>
            <li>
              <NavLinkStyled to="/" end>
                Home Page
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/plants">
                Plant Search
              </NavLinkStyled>
            </li>
          </NavList>
        </NavBar>
      </header>
      <main>
        <Suspense fallback={<Loader />} >
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer>
          <FooterText>!White Powder! Markevych Dmytro, 6ПІ-22б.</FooterText>
        </Footer>
      </footer>
    </div>
  );
}

export default SharedLayout;
