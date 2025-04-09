"use client";

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import NavbarWindow from "../NavbarWindow/NavbarWindow";
import { useState } from "react";

export function ProjectNavbar() {
  // hooks
  const [open, setopen] = useState(false);

  return (
    <Navbar className="bg-transparent text-white text-xl">
      <Navbar.Brand>
        <span
          onClick={() => setopen(true)}
          className="cursor-pointer self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >
          Netflix
        </span>
      </Navbar.Brand>
      <NavbarWindow open={open} setopen={setopen} />
      <div className="flex md:order-2 gap-3 items-center">
        <i className="fa-solid fa-magnifying-glass "></i>
        <NavLink to="/Login" className="hidden md:block">
          Login
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className={`w-full text-center `} to="/">Home</NavLink>
        <NavLink className={`w-full text-center md:text-nowrap mt-3 md:mt-0`} to="/TvShows">TV Shows</NavLink>
        <NavLink className={`w-full text-center mt-3 md:mt-0`} to="/movies">Movies</NavLink>
        <NavLink className={`w-full text-center md:text-nowrap   mt-3 md:mt-0`} to="/myList">My List</NavLink>
        <NavLink className={`w-full text-center block md:hidden mt-3 md:mt-0`} to="/Login">
          Login
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
