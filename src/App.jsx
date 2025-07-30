import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './Home/Home'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'
import Video from './Video/Video'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NotFound from './NotFound/NotFound'
import AboutUs from './AboutUs/AboutUs'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <div>Menu Page</div>
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
