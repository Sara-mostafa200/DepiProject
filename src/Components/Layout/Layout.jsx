import React from 'react'
import { Outlet } from 'react-router-dom'
import  { ProjectNavbar } from '../Navbar/ProjectNavbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <ProjectNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
