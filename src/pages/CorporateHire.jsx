import React from 'react'
import Hire from '../components/Hire'
import Navbar from '../components/Navbar'
import ConnectTalent from '../components/ConnectTalent'
import EdtechGraduates from '../components/EdtechGraduates'
import WorkAt from '../components/WorkAt'
import ResponsiveWorkAt from '../components/ResponsiveWorkAt'
import CorporateGallary from '../components/CorporateGallary'
import EdtechRoles from '../components/EdtechRoles'
import Plan from '../components/Plan'
import StartHiring from '../components/StartHiring'

const CorporateHire = () => {
  return (
    <main>
      <Navbar/>
      <Hire/>
      <ConnectTalent/>
      <EdtechGraduates/>
      <WorkAt/>
      <ResponsiveWorkAt/>
      <CorporateGallary/>
      <EdtechRoles/>
      <Plan/>
      <StartHiring/>
    </main>
  )
}

export default CorporateHire