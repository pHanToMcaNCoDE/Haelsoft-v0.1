import React from 'react'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import Courses from '../components/Courses'
import Benefits from '../components/Benefits'
import { Network } from 'lucide-react'
import ResponsiveNetwork from '../components/ResponsiveNetwork'
import PartTimeCertificateCourse from '../components/PartTimeCertificateCourse'
import Instructors from '../components/Instructors'
import GetStarted from '../components/GetStarted'

const Home = () => {
  return (
    <>
        <Hero />
        <Companies />
        <Courses />
        <Benefits />
        <Network />
        <ResponsiveNetwork />
        <PartTimeCertificateCourse />
        <Instructors />
        <GetStarted />
    </>
  )
}

export default Home