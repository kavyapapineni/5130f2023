import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (!movieNames) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      {movieNames.map((moviename, index) => (
        <MovieList
          key={moviename}
          title={moviename}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
