import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

// Custom Hook
const usePopularMovies = () => {
  // Fetch Data from TMDB API and update Store

  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // Make API Call only if popularMovies is null to reduce unncessary API Calls

    if (!popularMovies) {
      getPopularMovies();
    }
  });
};

export default usePopularMovies;
