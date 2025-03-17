import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { Routes, Route, } from 'react-router-dom'
import Navbar from './components/Navbar'
import WhySpare from './components/whySpare'
import Getservice from './components/Getservices/Homepage'
import Resource from './components/resource'
import Yoursevices from './components/Yoursevices'
import Landingpage from './components/Landingpage'
import Footer from './components/footer'
import ItServices from './components/Getservices/ItServices'
import Contactus from './components/contactus'
import Cleaning from './components/Getservices/Cleaning'
import Helper from './components/Getservices/Helper'
import Business from './components/Getservices/Business'
import Ride from './components/Getservices/Ride'
import Graphics from './components/Getservices/Graphics'


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Landingpage/>} />
        <Route path='/getservice' element ={<Getservice/>} />
        <Route path='/yourservice' element ={<Yoursevices/>}/>
        <Route path='/whyspare' element ={<WhySpare/>}/>
        <Route path='/resource' element ={<Resource/>}/>
        <Route path='/itservices' element ={<ItServices/>}/>
        <Route path='/helper' element ={<Helper/>}/>
        <Route path='/ride' element ={<Ride/>}/>
        <Route path='/cleaning' element ={<Cleaning/>}/>
        <Route path='/business' element ={<Business/>}/>
        <Route path='/graphics' element ={<Graphics/>}/>
      </Routes>
      <Contactus/>
      <Footer/>
       
    </>
  )
}

export default App
