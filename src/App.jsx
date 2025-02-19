import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Movies from './Components/Movies/Movies'
import MyList from './Components/Mylist/MyList'
import TVshows from './Components/TVshows/TVshows'
import Login from './Components/Login/Login'



function App() {
let router = createBrowserRouter(
  [ 
    {path:"", element:<Layout/> , children:[
      {index:true , element:<Home/> },
      {path:"movies", element:<Movies/>},
      {path:"myList", element:<MyList/>},
      {path:"TvShows", element:<TVshows/>},
      {path:"login", element:<Login/>},
      {path:"*", element:<NotFound/>}
    ]},

  ]
)
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     
    </>
  )
}

export default App
