import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ServiceUs from "./Pages/ServiceUs";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/serviceus" element={<ServiceUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <FAQ/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
