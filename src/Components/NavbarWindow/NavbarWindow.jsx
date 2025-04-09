import React, { useState } from "react";

export default function NavbarWindow({ open, setopen }) {
  // functions
  const toggleFunction = () => {
    if (open) {
      setopen(false);
    }
  };

  return (
    <div
      className={`${!open && `hidden`} fixed inset-0 bg-black  text-white  `}
    >
      <main className="container mx-auto flex flex-col justify-around h-full  ">
        <header className="flex px-3 md:px-0 justify-between items-center ">
          {/* logo */}
          <div className="logo text-mainColor font-bold text-3xl  ">Netflix</div>
          
          {/* my list */}
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-heart text-mainColor text-3xl"></i>
            <span>MyList</span>
          </div>

          {/* close action */}
          <div className="flex justify-end">
            <button
              onClick={toggleFunction}
              className="size-8 bg-mainColor rounded-full  flex items-center justify-center"
            >
              <i className="fa-solid fa-xmark  text-white  text-xl"></i>
            </button>
          </div>
        </header>

        {/* hedlines */}
        <div className="flex  justify-around items-center text-xl">
          <div className="flex flex-col items-center gap-5 ">
            {/* TV Shows */}
            <div className="flex  items-center gap-5 ">
              <i className="fa-solid fa-tv text-mainColor text-3xl"></i>
              <span>TV Shows</span>
            </div>
            <div className="flex flex-col gap-5 ">
                <span>Genre</span>
                <span>year</span>
                <span>rating</span>
            </div>
          </div>

          {/* Movies */}
          <div className="flex flex-col items-center gap-5 ">
          <div className="flex  items-center gap-5 ">
            <i className="fa-solid fa-film text-mainColor text-3xl"></i>
            <span>Movies</span>
          </div>

          <div className="flex flex-col gap-5 ">
                <span>Genre</span>
                <span>year</span>
                <span>rating</span>
            </div>
          </div>

         
        </div>




        <footer className="text-center mt-6 ">
          <p>Community</p>
          <p>Help Center</p>
        </footer>
      </main>
    </div>
  );
}
