import React from "react";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: false,
  };

  return (
    <Slider className=" " {...settings}>
      
      
      <div className="flex justify-center items-center lg:h-screen ">
        <iframe
        key="video1"
        className="aspect-video w-full  lg:w-10/12 mx-auto p-5 rounded-lg "
        src="https://www.youtube.com/embed/0pdqf4P9MB8"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video 1"
      ></iframe>
      </div>
      
      

      <div className="flex justify-center items-center lg:h-screen ">
        <iframe
        key="video1"
        className="aspect-video w-full  lg:w-10/12 mx-auto p-5 rounded-lg "
        src="https://www.youtube.com/embed/LLAaW1EgyY8"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video 1"
      ></iframe>
      </div>
      
      <div className="flex justify-center items-center lg:h-screen ">
        <iframe
        key="video1"
        className="aspect-video w-full  lg:w-10/12 mx-auto p-5 rounded-lg "
        src="https://www.youtube.com/embed/UaVTIH8mujA"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video 1"
      ></iframe>
      </div>
   
     
    </Slider>
  );
}

