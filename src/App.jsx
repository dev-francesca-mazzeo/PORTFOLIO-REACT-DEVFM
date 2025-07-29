import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import i18n to initialize language support
import "./i18n";

// Import your components
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
  StarsCanvas
} from "./components";

const App = () => {
  return (
    // BrowserRouter wraps the entire app to enable routing
    <BrowserRouter>
      {/* Main container with background and stacking context */}
      <div className='relative z-0 bg-primary'>
        {/* Hero section with background pattern */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* Navbar component, includes language switch button */}
          <Navbar />
          {/* Hero component, main intro banner */}
          <Hero />
        </div>

        {/* About section */}
        <About />
        {/* Experience section */}
        <Experience />
        {/* Technology skills section */}
        <Tech />
        {/* Projects/Works section */}
        <Works />
        {/* Testimonials/Feedbacks section */}
        <Feedbacks />

        {/* Contact section with animated stars canvas background */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
