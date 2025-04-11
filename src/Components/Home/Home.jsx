import React from 'react'
import Hero from '../Hero/Hero'
import Celebrities from '../Celebrities/Celebrities'
import TrendNow from './../TrendNow/TrendNow';
import PopularInterests from '../PopularInterests/PopularInterests';
import TopRated from '../TopRated/TopRated';
import RedBtn from '../RedBtn/RedBtn';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <div className='container mx-auto '>
      <Celebrities/>
      <TrendNow/>
      <PopularInterests/>
      <TopRated/>
      </div>
      <div className='w-full flex justify-center items-center p-5'>
      <Link className='bg-mainColor w-full md:w-1/2 px-3 py-3 text-center text-white font-inter font-[600] text-[20px] rounded-full' to={"/login"} >sign in for more access</Link>
      </div>
    </main>
  )
}
