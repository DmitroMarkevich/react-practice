import {Outlet} from "react-router-dom";
import {NavList, NavLinkStyled, NavBar} from "./SharedLayout.styled";
import {Suspense} from "react";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <NavBar>
          <NavList>
            <li>
              <NavLinkStyled to="/">
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/movies">
                Movies
              </NavLinkStyled>
            </li>
          </NavList>
        </NavBar>
      </header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </div>
  );
}

export default SharedLayout;
