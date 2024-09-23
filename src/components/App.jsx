import {Routes, Route} from "react-router-dom";
import React, {lazy} from "react";
import Error from "./Error/Error";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Plants = lazy(() => import("../pages/Plants"));
const PlantDetails = lazy(() => import("../pages/PlantDetails/PlantDetails"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="plants" element={<Plants/>}/>
        <Route path="plant/:plantId" element={<PlantDetails/>}>
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
