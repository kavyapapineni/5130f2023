import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

// Custom Hook
const useUpComingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  // Fetch Data from TMDB API and update Store
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    //  Make API Call only if upComingMovies is null to reduce unncessary API Calls

    if (!upComingMovies) getUpComingMovies();
  });
};

export default useUpComingMovies;
