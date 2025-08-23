import Navbar from './components/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Alerts from './components/Alerts'
import Data_Breach from './components/Data_Breach'
import SecurityScore from './components/SecurityScore'
import Main from './components/Homepage/Main'
import Footer from './components/Footer'
import Hero from './components/Homepage/Hero'
import KeyFeatures from './components/Homepage/KeyFeatures'
import HowItWorks from './components/Homepage/HowItWorks'
import WhyChooseUs from './components/Homepage/WhyChooseUs'
import CallToAction from './components/Homepage/CallToAction'
import Contact from './components/contack'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Main /><Hero/><KeyFeatures/><HowItWorks/><WhyChooseUs/><CallToAction/><Footer/></>
    },
   {
    path:"/contact",
    element:<><Navbar /><Contact/><Footer/></>
   },
   {
    path:"/alerts",
    element:<><Navbar /><Alerts/></>
   },
   {
    path:"/Data-Breach",
    element:<><Navbar /><Data_Breach/></>
   },
   {
    path:"/SecurityScore",
    element:<><Navbar /><SecurityScore/></>
   },
  ])
  
  return (
    <>
     <RouterProvider router={router}/>

    </>
  )
}

export default App
