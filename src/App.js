import React, { Component } from 'react';
import "./resources/styles.css";
import {Element} from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueInfo from "./components/venueInfo/index"; 
import Highlight from "./components/Highlights/index.js";
import Pricing  from "./components/pricing/index.js";
import Location from  "./components/location/index.js";
import Footer from "./components/header_footer/Footer"

class App extends Component {
  render() {
    return (
      <div className= "App" style= {{height:"1500px", background:'cornflowerblue'}} >
      <Header/> 

      <Element name="Featured">
      <Featured/>
      </Element>

      <Element name="Venue Info">
      <VenueInfo/>
      </Element>

      <Element name="Highlights">
      <Highlight/>
      </Element>

      <Element name="Pricing">
      <Pricing/>
      </Element>

      <Element name="Location">
      <Location/>
      </Element>
       
       <Footer/>

      </div>
    );
  }
}

export default App;