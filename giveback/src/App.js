import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Donate from './components/Donate';
import MyCarousel from "./components/Home/Carousel";
import WhyGive from "./components/Home/WhyGive";
import StatsSection from "./components/StatsSection";
import IndiaDonate  from './components/IndiaDonate';
import { FaqThree } from './components/Testimonials';
import Footer from './components/Common/Footer';
import Card from './components/Home/Cards';
import TeamSection from './components/Home/Donors';
import  OtherCountriesDonate  from './components/OtherCountriesDonate';
import About from './components/About';
import WhyDonate from './components/WhyDonate';
import Initiatives from './components/Initiatives';
import ContactUs from './components/Contact';
import Profiles from './components/Profiles';

function Main() {
  return (
    <div>
      <MyCarousel />
      <WhyGive />
      <Card/>
    </div>
  );
}
// hello
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/initiatives' element={<Initiatives/>}/>
          <Route path='/contact' element= {<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/donate" element={<Donate />} />
          <Route path="/whydonate" element={<WhyDonate />} />
          <Route path="/about/Profiles" element={<Profiles />} />
          <Route path="/donate/in/Annual-Gift-Programme" element={<IndiaDonate/>} />
          <Route path="/donate/oc/Annual-Gift-Programme" element={<OtherCountriesDonate/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;