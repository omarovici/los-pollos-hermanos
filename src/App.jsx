import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './components/Home/Home'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import AboutUs from './components/AboutUs/AboutUs'
import Menu from './components/Menu/Menu';
import Item from './components/Item/Item';

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
        element: <Menu />
      },
      {
        path: "/item/:id",
        element: <Item />
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
