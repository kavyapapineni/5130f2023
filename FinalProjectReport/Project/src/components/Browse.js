import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatingMovies from "../hooks/useTopRatingMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  // Custom Hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
