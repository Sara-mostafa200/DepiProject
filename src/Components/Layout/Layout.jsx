import React from 'react'
import { Outlet } from 'react-router-dom'
import  { ProjectNavbar } from '../Navbar/ProjectNavbar'
import Footer from '../Footer/Footer'
import NavbarWindow from '../NavbarWindow/NavbarWindow'

export default function Layout() {
  return (
    <>
      <ProjectNavbar/>
      <main className=''>
      <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
