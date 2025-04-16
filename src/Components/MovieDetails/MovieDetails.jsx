
import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../lib/moviesSlice"; 
import More from "../More/More";
import Reaction from "../Reaction/Reaction";
import { getAllData } from "../../lib/allData";


const MovieDetails = () => {
  const { id } = useParams(); 
  
  const dispatch = useDispatch();
  const { allData, isLoading, isError } = useSelector((state) => state.allData); 

  useEffect(() => {
    window.scrollTo(0, 0);
    if (allData.length === 0) {

    dispatch(getAllData());
    
    }
  }, [allData.length,dispatch  , id]);

 
  const movie = allData.find((movie) => movie._id === id);

  if (isLoading) return <div className="text-center text-white mt-10">Loading...</div>;
  if (isError) return <div className="text-center mt-10 text-red-500">Error fetching movie data.</div>;
  if (!movie) return <div className="text-center text-white mt-10">Movie not found.</div>;

  return (
    <main className="container mx-auto p-4">
         <div>
         <iframe
          src={movie.Trailer}
          title={movie.Title}
          className="w-full h-96 mt-4 rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> 
        < Reaction/> 
        
<div className="flex flex-wrap gap-2 text-white mt-2 text-sm px-2 m-1">
  {(Array.isArray(movie.Genre)
    ? movie.Genre
    : typeof movie.Genre === "string"
    ? movie.Genre.split(",").map((g) => g.trim())
    : []
  ).map((genre, index) => (
    <span
      key={index}
      className="px-2 py-1 rounded-xl border border-white h-6 flex items-center"
    >
      {genre}
    </span>
  ))}
</div>

        <p className="text-white pt-2 m-2 flex flex-wrap">{movie.Plot}</p>
        <hr className="border-t border-gray-500 w-full my-5 mx-1" />
        <p className="text-white mt-4">
          Director <span className="text-blue-800 px-3">{movie.Director}</span>
        </p>
        <hr className="border-t border-gray-500 w-full my-5 mx-1" />
        <p className="text-white mt-4">
          Writers <span className="text-blue-800 px-3">{movie.Writer}</span>
        </p>
        <hr className="border-t border-gray-500 w-full my-5 mx-1" />
        <p className="text-white mt-4">
          Stars <span className="text-blue-800 px-3">{movie.Actors}</span>
        </p>
      </div>
        <More /> 
    </main>
  );
};

export default MovieDetails;
