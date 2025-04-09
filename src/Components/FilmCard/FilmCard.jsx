import React, { useEffect, useState } from 'react'

export default function FilmCard({posterPath ,filmTitle , filmVoteAverage}) {

 
  return ( 
    
     <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-48 my-4 mx-auto duration-300">
      
      {/* image */}
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="title" className="w-full h-64 object-cover" />

      {/* content */}
      <div className="p-4">
        {/* title */}
        <h3 className="text-white text-lg font-semibold truncate">{filmTitle}</h3>

        {/* Rating */}
        <div className="flex items-center mt-2">
            {/* icon */}
          <i class="fa-solid fa-star text-SecondColor "></i>

          {/* rate */}
          <span className="text-gray-400 ml-1">{filmVoteAverage}</span>
        </div>

        {/* actions */}
        <div className="flex flex-col items-center gap-3 mt-4">
         {/* Watchlist */}
          <button className="flex items-center justify-center w-full gap-2 bg-[#4744408f] rounded-lg  text-gray-300 hover:text-white text-lg">

            {/* icon */}
          <i class="fa-solid fa-heart text-mainColor "></i>

           {/* title */}
            Watchlist
          </button>

          {/* Trailer */}
          <button className="flex items-center justify-center w-full gap-2 text-SecondColor text-lg">
          {/* icon */}
          <i class="fa-solid fa-play"></i>

          {/* title */}
            Trailer
          </button>
        </div>
      </div>
    </div>
      

  )
}
