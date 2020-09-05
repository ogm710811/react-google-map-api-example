import React from 'react';
import './App.css';
import ContactSection from "./components/ContactSection/ContactSection";
import Map from "./components/map/Map";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import Disclaimer from "./components/disclaimer/Disclaimer";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

function App() {
  return (
    <div className="App">
      <Intro />
      <ContactSection />
      <Map location={location} zoomLevel={17} /> {/* include it here */}
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;
