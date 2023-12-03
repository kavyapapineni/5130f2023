import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

// Custom Hook
const useTopRatingMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  // Fetch Data from TMDB API and update Store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    //  Make API Call only if topRatedMovies is null to reduce unncessary API Calls

    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  });
};

export default useTopRatingMovies;
