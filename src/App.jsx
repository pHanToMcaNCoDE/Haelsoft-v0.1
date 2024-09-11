import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Companies from './components/Companies'
import Courses from './components/Courses'
import Benefits from './components/Benefits'
import Instructors from './components/Instructors'
import GetStarted from './components/GetStarted'
import Network from './components/Network'
import ResponsiveNetwork from './components/ResponsiveNetwork'
import PartTimeCertificateCourse from './components/PartTimeCertificateCourse'
import Menu from './components/Menu'

function App() {
  const [changeColor, setChangeColor] = useState(false)
  const [clicked, setClicked] = useState(false);

  return (
    <main className=''>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Menu clicked={clicked} />
      <Hero/>
      <Companies/>
      <Courses/>
      <Benefits/>
      <Network/>
      <ResponsiveNetwork/>
      <PartTimeCertificateCourse/>
      <Instructors/>
      <GetStarted/> 
      <Footer/>
    </main>
  )
}

export default App
