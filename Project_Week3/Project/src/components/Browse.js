import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custom Hook
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/*
          MainContainer
            - Video Background
            - Video Title
          SecondaryContainer
            - MovieList * n
              - Cards * n
      */}
    </div>
  );
};

export default Browse;
