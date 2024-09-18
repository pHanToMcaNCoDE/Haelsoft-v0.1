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
// import Menu from './components/Menu';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import CorporateHire from './pages/CorporateHire';
import CorporateTraining from './pages/CorporateTraining';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  const [clicked, setClicked] = useState('');

  // Close menu when clicking outside
  const handleClickOutside = () => {
    if (clicked) {
      setClicked(false);
    }
  };

  return (
    <main onClick={handleClickOutside} className='relative'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout clicked={clicked} setClicked={setClicked}/>}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>}></Route>
            <Route path='/corporate-hire' element={<CorporateHire/>}></Route>
            <Route path='/corporate-training' element={<CorporateTraining/>}></Route>
            <Route path='/careers' element={<Careers/>}></Route>
            <Route path='/blogs' element={<Blog/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
