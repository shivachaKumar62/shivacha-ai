import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from './pages/Header'
import CompanyAnimation from '../aibulkvideo/pages/CompanyAnimation'
import ScriptCard from './pages/ScriptCard'
import PersonalizeScript from './pages/PersonalizeScript'
import HighQuality from './pages/HighQuality'
import BoostAudience from './pages/BoostAudience'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import TrustedComp from '../homepage/pages/TrustedComp'
import Footer from "../homepage/pages/Footer"

const ScriptVideoGenerator = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CompanyAnimation />
      <ScriptCard />
      <HighQuality />
      <PersonalizeScript />
      <BoostAudience />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>
  )
}

export default ScriptVideoGenerator
