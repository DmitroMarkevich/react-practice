import {Routes, Route} from "react-router-dom";
import React, {lazy} from "react";
import Error from "./Error/Error";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/react-practice" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Error
          title="404 - Page Not Found"
          message="Oops! The page you're looking for doesn't exist."
          linkText="Go back"
          linkUrl="/"
        />}/>
      </Route>
    </Routes>
  );
};
