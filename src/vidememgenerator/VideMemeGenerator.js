import React from 'react'
import Navbar from '../navbar/Navbar'
import FirstComp from './pages/FirstComp'
import CompanyAnimation from '../aibulkvideo/pages/CompanyAnimation'
import WhyCardmeme from './pages/WhyCardmeme'
import Enhanced from './pages/Enhanced'
import SaveTime from './pages/SaveTime'
import AmplifyBrand from './pages/AmplifyBrand'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import TrustedComp from '../homepage/pages/TrustedComp'
import Footer from '../homepage/pages/Footer'


const VideMemeGenerator = () => {
  return (
    <div>
      <Navbar />
      <FirstComp />
      <CompanyAnimation />
      <WhyCardmeme />
      <Enhanced />
      <SaveTime />
      <AmplifyBrand />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>
  )
}

export default VideMemeGenerator
