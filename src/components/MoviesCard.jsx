/* eslint-disable react/prop-types */
import { POSTER_URL } from "../utils/constant";

const MoviesCard = ({ poster_path }) => {

  // const playVideo = (

  // ) =>{

  // }
  // if added margin mt-[500px]  images are going out of the box getting expected result but the gap is to much between div of cards
  return (
    <div className=  " rounded-md w-[28%] h-55 flex-shrink-0  border-2  overflow-visible snap-start  2xl:h-[450px] 2xl:w-[300px] lg:h-[400px] lg:w-[250px]">
      <img
        className="h-full w-full   object-cover rounded-md 2xl:hover:drop-shadow-2xl hover:scale-125 hover:duration-700 ease-in-out hover:cursor-pointer "
        src={POSTER_URL + poster_path}
        alt="movie posters"
      />
      {/* <div className=" absolute ">
          <button className="px-14 py-5  hover:visible  bg-red-400 hover:cursor-pointer" onClick={playVideo}> </button>
      </div> */}
    </div>
  );
};

export default MoviesCard;