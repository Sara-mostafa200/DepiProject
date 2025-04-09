import React from 'react'
import Hero from '../Hero/Hero'
import Celebrities from '../Celebrities/Celebrities'
import TrendNow from './../TrendNow/TrendNow';


export default function Home() {
  return (
    <main className=''>
      <Hero/>
      <div className='container mx-auto '>
      <Celebrities/>
      <TrendNow/>
      </div>
    </main>
  )
}
