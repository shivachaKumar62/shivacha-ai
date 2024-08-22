import React from 'react'
import Navbar from '../navbar/Navbar'
import BulkVideo from './pages/BulkVideo'
import TrustedPartner from './pages/TrustedPartner'
import About from './pages/About'
import HowToWork from './pages/HowToWork'
import AIFeature from './pages/AIFeature'
import Transform from './pages/Transform'
import BlogPosts from './pages/BlogPosts'
import LongForm from './pages/LongForm'
import ProduceLife from './pages/ProduceLife'
import DiscoverMore from './pages/DiscoverMore'
import DiscoverMoreOne from './pages/DiscoverMoreOne'
import Faq from './pages/Faq'
import TrustedComp from './pages/TrustedComp'
import Footer from './pages/Footer'
import SemiFooter from './pages/SemiFooter'

const Homepage = () => {
  return (
    <div>
     <Navbar />
     <BulkVideo />
     <TrustedPartner />
     <About />
     <HowToWork />
     <AIFeature />
     <Transform />
     <BlogPosts />
     <LongForm />
     <ProduceLife />
     <DiscoverMore />
     {/* <DiscoverMoreOne /> */}
     <Faq />
     <TrustedComp />
     <Footer />
     <SemiFooter />
    </div>
  )
}

export default Homepage
