import React, { useRef } from "react";
import { useState } from "react";
import { JSON_HEADERS } from "../../constants/headers.constant";
import Superhero from "../../assets/Superhero.jpg";
export default function SearchNav() {
  // hooks
  const [data, setdata] = useState(null);
  const [toggle, settoggle] = useState(false);
  const timeoutRef = useRef(null);
  // function
  const Search = async (KeyWord) => {
    if (!KeyWord) return setdata(null); 
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${KeyWord}&include_adult=false&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            ...JSON_HEADERS,
          },
        }
      );

      const payload = await response.json();
      
      if (payload.results) setdata(payload.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    if (timeoutRef.current) clearTimeout(timeoutRef.current); 

    timeoutRef.current = setTimeout(() => {
      Search(value);
    }, 500); 
  };


  return (
    <div
      
      className="search  relative flex items-center"
    >
      <i className="fa-solid fa-magnifying-glass absolute  left-2 text-base text-mainColor top-1/2 -translate-y-1/2"></i>
      <input
        onFocus={() => settoggle(true) }
        onBlur={() => settoggle(false)}
        onChange={handleChange}
        type="search"
        placeholder="search now"
        className="bg-transparent text-white h-8 pl-7 rounded-lg focus:border-mainColor focus:ring-0"
      />
      {toggle && (
        <div className="custom-scrollbar absolute z-10 left-0 right-0 top-[100%] bg-opacity-50 bg-black h-96 overflow-y-scroll">
          {data?.map((film) => (
            <div key={film.id} className="w-full mt-3 flex gap-5 items-center hover:text-SecondColor">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                className="size-16 object-contain"
                alt=""
              />
              <span className="font-bold text-xl">
                {film.title.split(" ").slice(0, 2).join(" ")}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
