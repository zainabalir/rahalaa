import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../Hero/Hero'
import Culture from '../Culture/Culture'
import Top from '../Top/Top'
import Whyvisitiraq from '../Whyvisitiraq/Whyvisitraq'
import About from '../About/About'
import Footer from '../Footer/Footer'
import "./home.css"





const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Whyvisitiraq/>
        <Culture/>
        <Top/>
        <About/>
        <Footer/>
      
    </div>
  )
}

export default Home
