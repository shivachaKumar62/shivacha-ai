import React from 'react'
import FirstComp from './pages/FirstComp'
import Navbar from '../navbar/Navbar'
import CompanyAnimation from '../aibulkvideo/pages/CompanyAnimation'
import CorporateCard from './pages/CorporateCard'
import StreamLineCorporate from './pages/StreamLineCorporate'
import TailorCorporate from './pages/TailorCorporate'
import EnsureBrand from './pages/EnsureBrand'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import Footer from '../homepage/pages/Footer'
import TrustedComp from '../homepage/pages/TrustedComp'

const CorporateVideoGenerator = () => {
  return (
    <div>
      <Navbar />
      <FirstComp />
      <CompanyAnimation />
      <CorporateCard />
      <StreamLineCorporate />
      <TailorCorporate />
      <EnsureBrand />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>

  )
}

export default CorporateVideoGenerator
