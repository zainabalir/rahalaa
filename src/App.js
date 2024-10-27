import React from 'react';
// import './App.css';
import Login from './components/Login/Login';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Korekpage from './components/Korek Mountains,/Korekpage';
// import SearchBar from './components/Service/SearchBar';
// import KorekMountains from './components/Korek Mountains,/KorekMountains';
// import Attractioncard from './components/Attractioncard/Attractioncard';
// import Culture from './components/Culture/Culture';

import { Route, Routes } from 'react-router-dom';
// import CustomFooter from './components/Footer/Footer'; // Adjust the path as needed
import Home from './components/Home/Home';
// import Header from './components/Header/Header'
// import ImageCarousel from  './components/Korek Mountains,/ImageCarsousel'
// import Signup from "./components/Signup/Signup"
// import Top from './components/Top/Top'
// import Cards from './components/Attractioncard/Cards';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      {/* <SearchBar/> */}
      {/* <Login/> */}
      {/* <Cards/> */}
      {/* <Header/> */}
      {/* <ImageCarousel /> */}
      {/* <Attractioncard/> */}
      {/* <KorekMountains/> */}
      {/* <Korekpage/> */}
      {/* <Culture/> */}
      {/* <Top/> */}
    </div>
  );
}

export default App;
