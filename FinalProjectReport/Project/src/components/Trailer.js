import VideoBackground from "./VideoBackground";
import { useHistory, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Trailer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = location.pathname.split("/")[2];

  const handleClick = () => {
    navigate("/browse");
  };
  return (
    <h1>
      <div>
        <div>
          <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
            <div className="m-12">
              <button
                className="bg-white text-black p-6 px-12 text-xl rounded-lg hover:bg-opacity-80"
                onClick={handleClick}
              >
                Go Back 🔙
              </button>
            </div>
          </div>
          <VideoBackground movieId={movieId} />
        </div>
      </div>
    </h1>
  );
};

export default Trailer;
