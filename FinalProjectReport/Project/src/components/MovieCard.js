import React from "react";
import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieId, posterPath }) => {
  const navigate = useNavigate();
  const handleClick = (movieId) => {
    navigate("/trailer/" + movieId);
  };
  if (!posterPath) {
    return null;
  }
  return (
    <div className="w-48 pr-4 pl-4 cursor-pointer hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-300">
      <img
        alt="movie card"
        src={IMG_CDN_URL + posterPath}
        onClick={(e) => handleClick(movieId)}
      />
    </div>
  );
};

export default MovieCard;
