import React from 'react'
import Navbar from '../navbar/Navbar'
import PromoVideo from './pages/PromoVideo'
import CompanyAnimation from '../aibulkvideo/pages/CompanyAnimation'
import WhyCard from './pages/WhyCard'
import DriveSales from './pages/DriveSales'
import SaveTime from './pages/SaveTime'
import BoostConversions from './pages/BoostConversions'
import DiscoverMore from '../homepage/pages/DiscoverMore'
import Faq from '../homepage/pages/Faq'
import TrustedComp from '../homepage/pages/TrustedComp'
import Footer from '../homepage/pages/Footer'

const AiPromoVideo = () => {
  return (
    <div>
      <Navbar />
      <PromoVideo />
      <CompanyAnimation />
      <WhyCard />
      <DriveSales />
      <SaveTime />
      <BoostConversions />
      <DiscoverMore />
      <Faq />
      <TrustedComp />
      <Footer />
    </div>
  );
}

export default AiPromoVideo;
