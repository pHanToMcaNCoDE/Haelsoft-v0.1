import React from 'react'
import Navbar from '../components/Navbar'
import Hire from '../components/Hire'
import StartHiring from '../components/StartHiring'
import Plan from '../components/Plan'
import TrainingBenefits from '../components/TrainingBenefits'
import Random from '../components/Random'
import Comments from '../components/Comments'

const CorporateTraining = () => {
  return (
    <main>
        <Navbar/>
        <Hire/>
        <TrainingBenefits/>
        <Random/>
        <Comments/>
        <Plan/>
        <StartHiring/>
    </main>
  )
}

export default CorporateTraining