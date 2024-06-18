import React from 'react'
import Navbar from '../navbar/Navbar'
import FirstComp from './pages/FirstComp'
import CompanyAnimation from '../aibulkvideo/pages/CompanyAnimation'
import SocialMediaCard from './pages/SocialMediaCard'
import BuildBrand from './pages/BuildBrand'
import IncreaseGoals from './pages/IncreaseGoals'
import BoostConversations from './pages/BoostConversations'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import TrustedComp from '../homepage/pages/TrustedComp'
import Footer from '../homepage/pages/Footer'

const SocialMediaGenerator = () => {
  return (
    <div>
      <Navbar />
      <FirstComp />
      <CompanyAnimation />
      <SocialMediaCard />
      <BuildBrand />
      <IncreaseGoals />
      <BoostConversations />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>
  )
}

export default SocialMediaGenerator
