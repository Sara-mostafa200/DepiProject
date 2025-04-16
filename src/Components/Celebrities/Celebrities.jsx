import React, { useEffect, useState } from "react";
import { JSON_HEADERS } from "./../../constants/headers.constant";
import Slider from "react-slick";
import actor1 from "../../assets/actor1.jpg";
import actor2 from "../../assets/actor2.jpg";
import actor3 from "../../assets/actor3.jpg";
import actor4 from "../../assets/actor4.jpg";
import actor5 from "../../assets/actor5.jpg";
import actor6 from "../../assets/actor6.jpg";
import actor7 from "../../assets/actor7.jpg";
import actor8 from "../../assets/actor8.jpg";

export default function Celebrities() {
  // hooks
  // const [data, setdata] = useState(null);
    const data = [
      {
        src: actor1,
        title: "actor1",
      },
      {
        src: actor2,
        title: "actor2",
      },
      {
        src: actor3,
        title: "actor3",
      },
      {
        src: actor4,
        title: "actor4",
      },
      {
        src: actor5,
        title: "actor5",
      },
      {
        src: actor6,
        title: "actor6",
      },
      {
        src: actor7,
        title: "actor7",
      },
      {
        src: actor8,
        title: "actor8",
      },
     
    ];

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
          <div key={item.title} className="py-5 ">
          <img src={item.src} className="rounded-full object-cover mx-auto size-56 p-5"/>
          </div> 
        ))}
      </Slider> 
      </section>
    
  );
}
