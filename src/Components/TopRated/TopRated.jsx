import React, { useEffect, useState } from "react";
import  Slider  from "react-slick";
import { JSON_HEADERS } from "../../constants/headers.constant";
import FilmCard from "./../FilmCard/FilmCard";
import { useNavigate } from "react-router-dom";

export default function TopRated() {
  // hooks
  const [data, setdata] = useState(null);
  const navigate = useNavigate();

  // constant
  // const url =
  //   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const url =
    "https://movies-qqg3.onrender.com/api/movies/?imdbRating=9.2";

  // functions

  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });

      const payload = await response.json();
      console.log(payload.data.tours);
      
      if (payload.data.tours) setdata(payload.data.tours);
    } catch (error) {
      navigate("/error");
      setdata(error);
      console.log(data);

    }
  };
  

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
    getData();
  }, []);

  return (
    <section className="py-10">
      {/* title */}
      <h3 className="section-title relative pl-5 py-2 text-SecondColor text-3xl font-bold">
      Top Rated
      </h3>

      {/* slider */}
      <Slider className="py-5"  {...settings}>
        
      {data?.map((item) => (
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
