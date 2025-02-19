
"use client";

import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

export function ProjectNavbar() {
  return (
    <Navbar  >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Netflix</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-3 items-center">
        <i className="fa-solid fa-magnifying-glass "></i>
        <NavLink to="/Login" className="hidden md:block">Login</NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/TvShows">TV Shows</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/myList">My List</NavLink>
        <NavLink to="/Login" className="block md:hidden">Login</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
