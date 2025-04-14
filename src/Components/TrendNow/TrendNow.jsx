import React, { useEffect, useState } from "react";
import  Slider  from "react-slick";
import { JSON_HEADERS } from "../../constants/headers.constant";
import FilmCard from "./../FilmCard/FilmCard";
import { getMovies } from "../../lib/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function TrendNow() {
  // hooks
  const [data, setdata] = useState(null);
  const dispatch = useDispatch()
  const {allMovies , isError}   = useSelector( (state) => state.movies)

  // Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  // useEffect
  useEffect(() => {
    dispatch(getMovies());
    
  }, []);

  return (
    <section className="py-10">
      {/* title */}
      <h3 className="section-title relative pl-5 py-2 text-SecondColor text-3xl font-bold">
      Trend NOW
      </h3>

      {/* slider */}
      <Slider className="py-5"  {...settings}>
        
      {allMovies?.map((item) => (
          <FilmCard
             key={item._id}
             filmVoteAverage={item.imdbRating}
             posterPath={item.Poster}
             filmTitle={item.Title}
             Trailer={item.Trailer}
          />
         
         
        ))}
            
      </Slider>
    </section>
  );
}
