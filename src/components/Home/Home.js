import React from 'react'
import Header from '../Header/Header'
import HeroSection from '../Hero/Hero'
import Culture from '../Culture/Culture'
import SearchBar from '../Service/SearchBar'

import Whyvisitiraq from '../Whyvisitiraq/Whyvisitraq'
import Top from '../Top/Top'
import Footer from '../Footer/Footer'




const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <SearchBar/>
        <Culture/>
        <Whyvisitiraq/>
        <Top/>
        <Footer/>
      
    </div>
  )
}

export default Home
