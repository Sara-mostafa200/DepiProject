import React, { useEffect, useState } from "react";
import  Slider  from "react-slick";
import { JSON_HEADERS } from "../../constants/headers.constant";
import FilmCard from "./../FilmCard/FilmCard";

export default function TrendNow() {
  // hooks
  const [data, setdata] = useState(null);

  // constant
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  // functions

  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          ...JSON_HEADERS,
        },
      });

      const payload = await response.json();

      if (payload.results) setdata(payload.results);
    } catch (error) {
      setdata(error);
      console.log(data);
    }
  };
  console.log(data);
  console.log("FilmCard Component: ", FilmCard);

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
      Trend NOW
      </h3>

      {/* slider */}
      <Slider className="py-5"  {...settings}>
        
      {data?.map((item) => (
               <FilmCard
            filmVoteAverage={item.vote_average}
            posterPath={item.poster_path}
            filmTitle={item.title}
          />
         
           
         
        ))}
            
      </Slider>
    </section>
  );
}
