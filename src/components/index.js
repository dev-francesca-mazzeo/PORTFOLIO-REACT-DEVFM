// Importing all main React components and canvas animations from their files
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';
import Footer from './Footer';

// Exporting all components and canvas elements together for easy centralized imports
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  Footer,
  EarthCanvas,    // 3D Earth animation canvas
  BallCanvas,     // 3D rotating ball animation canvas
  ComputersCanvas, // 3D computer animation canvas
  StarsCanvas     // 3D starfield background canvas
};
