import React from "react";
import Fantasy from "../../assets/Fantasy.jpg";
import Drama from "../../assets/Drama.jpg";
import cartoon from "../../assets/cartoon.jpg";
import Superhero from "../../assets/Superhero.jpg";
import Horror from "../../assets/Horror.jpg";
import Slider from "react-slick";

export default function PopularInterests() {
  const data = [
    {
      src: Fantasy,
      title: "Fantasy",
    },
    {
      src: Drama,
      title: "Drama",
    },
    {
      src: cartoon,
      title: "cartoon",
    },
    {
      src: Superhero,
      title: "Superhero",
    },
    {
      src: Horror,
      title: "Horror",
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

  return (
    <section className="py-14">
      {/* title */}
      <h3 className="section-title relative pl-5 py-2 text-SecondColor text-3xl font-bold">
      Popular interests{" "}
      </h3>

      {/* slider */}
      <Slider className=" py-5" {...settings}>
        {data.map((type) => (
          <div className="relative group w-full h-64 p-4 flex justify-center items-center">
            <div className="relative overflow-hidden">
              <img
                src={type.src}
                className="h-64 mx-auto object-contain rounded-lg"
                alt="Fantasy"
              />

              <div
                className="absolute inset-0 opacity-0 translate-y-72 group-hover:translate-y-0 group-hover:opacity-100 bg-black bg-opacity-80 p-3 
         justify-center flex items-center duration-500
         "
              >
                <p className="text-white bg-mainColor rounded-lg p-3 font-bold text-3xl">
                  {type.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
{
  /* <div className='bg-[url("./assets/Fantasy.jpg")] w-full mx-auto bg-red-800 bg-no-repeat h-60 bg-cover bg-center' >

</div> 
              <img src={type.src} alt={type.title} className='w-full h-64 object-contain relative '  />

*/
}
