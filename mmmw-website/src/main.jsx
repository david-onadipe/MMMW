import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import Navbar from './components/Header/navbar.jsx'
import Contactbar from './components/Header/contactbar.jsx'
import Footer from './components/footer/footer.jsx'
import Landingpage from './pages/landingpage/landingpage.jsx'
import Eventspage from './pages/EventsPage/events-page.jsx'
import NotFound from './pages/ErrorPage/notfound.jsx'
import AboutUs from './pages/AboutUs/about-us.jsx'


const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage/>,
    errorElement: <NotFound/>
  },
  {
    path: '/home',
    element: <Landingpage/>
  },
  {
    path: '/events',
    element: <Eventspage/>
  },
  {
    path: '/about-us',
    element: <AboutUs/>
  },

]);

root.render(
  <StrictMode>
    <Contactbar/>
    <Navbar/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)

