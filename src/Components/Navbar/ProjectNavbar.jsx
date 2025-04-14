"use client";

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import NavbarWindow from "../NavbarWindow/NavbarWindow";
import { useState } from "react";
import { Search } from "./../../lib/searchFn";
import SearchNav from './../searchNav/SearchNav';

export function ProjectNavbar() {
  // hooks
  const [open, setopen] = useState(false);

  return (
    <Navbar className="bg-transparent py-5 text-white text-xl">
      <Navbar.Brand>
        <span
          onClick={() => setopen(true)}
          className="fa-bounce cursor-pointer self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          DepiFilm
        </span>
      </Navbar.Brand>
      <NavbarWindow open={open} setopen={setopen} />
      <div className="flex justify-between w-full md:w-auto md:order-2 gap-3 items-center">
        <SearchNav/>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className={`w-full text-center `} to="/">
          Home
        </NavLink>
        <NavLink
          className={`w-full text-center md:text-nowrap mt-3 md:mt-0`}
          to="/TvShows"
        >
          TV Shows
        </NavLink>
        <NavLink className={`w-full text-center mt-3 md:mt-0`} to="/movies">
          Movies
        </NavLink>
        <NavLink
          className={`w-full text-center md:text-nowrap   mt-3 md:mt-0`}
          to="/myList"
        >
          My List
        </NavLink>
        <NavLink
          className={`w-full text-center block md:hidden mt-3 md:mt-0`}
          to="/Login"
        >
          Login
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
