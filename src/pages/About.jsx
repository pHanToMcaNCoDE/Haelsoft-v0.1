import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutStart from '../components/AboutStart'
import DigitalTransformation from '../components/DigitalTransformation'
import CuttingEdgeSkills from '../components/CuttingEdgeSkills'
import Leaders from '../components/Leaders'
import Organization from '../components/Organization'

const About = () => {
  return (
    <main>
        <AboutHero/>
        <AboutStart/>
        <DigitalTransformation/>
        <CuttingEdgeSkills/>
        <Leaders/>
        <Organization/>
    </main>
  )
}

export default About