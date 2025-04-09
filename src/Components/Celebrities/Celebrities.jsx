import React, { useEffect, useState } from "react";
import { JSON_HEADERS } from "./../../constants/headers.constant";
import Slider from "react-slick";

export default function Celebrities() {
  // hooks
  const [data, setdata] = useState(null);

  // Slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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

  //  functions
  const getCelebrities = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/person/day?language=en-US`,
      {
        method: "GET",
        headers: {
          ...JSON_HEADERS,
        },
      }
    );
    const payload = await response.json();

    if (payload.results) {
      setdata(payload.results);
    }
    console.log(data);
    

  };

  //   useEffect
  useEffect(() => {
    getCelebrities();
  }, []);

  return (
    <section className="py-14">
       {/* title */}
       <h3 className="section-title relative pl-5 py-2 text-SecondColor text-3xl font-bold">Most popular celebrities </h3>
       {/* slider */}
      <Slider className="" {...settings}>
        {data?.map((item) => (
          <div key={item.id} className="py-5 ">
          <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} className="rounded-full object-cover mx-auto size-48 p-5"/>
          </div> 
        ))}
      </Slider> 
      </section>
    
  );
}
