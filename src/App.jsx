import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import Instructors from './components/Instructors';
import GetStarted from './components/GetStarted';
import Network from './components/Network';
import ResponsiveNetwork from './components/ResponsiveNetwork';
import PartTimeCertificateCourse from './components/PartTimeCertificateCourse';
import Menu from './components/Menu';
import About from './pages/About';

function App() {
  const [clicked, setClicked] = useState(false);

  // Close menu when clicking outside
  const handleClickOutside = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <main onClick={handleClickOutside} className='relative'>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <About/>
      {/* <Hero />
      <Companies />
      <Courses />
      <Benefits />
      <Network />
      <ResponsiveNetwork />
      <PartTimeCertificateCourse />
      <Instructors />
      <GetStarted /> */}
      <Footer />
    </main>
  );
}

export default App;
