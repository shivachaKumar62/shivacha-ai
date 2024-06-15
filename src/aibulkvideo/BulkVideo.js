import React from 'react'
import GenerateBulk from './pages/GenerateBulk'
import Navbar from "../navbar/Navbar"
import CompanyAnimation from './pages/CompanyAnimation'
import WhyCard from './pages/WhyCard'
import EasilyCreate from './pages/EasilyCreate'
import VarietyVideo from './pages/VarietyVideo'
import VariousType from './pages/VariousType'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import TrustedComp from '../homepage/pages/TrustedComp'
import Footer from '../homepage/pages/Footer'

const BulkVideo = () => {
  return (
    <div>
      <Navbar />
      <GenerateBulk />
      <CompanyAnimation />
      <WhyCard />
      <EasilyCreate />
      <VarietyVideo />
      <VariousType />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>
  )
}

export default BulkVideo
