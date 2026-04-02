import React from 'react'
import HomeSlider from './components/HomeSlider'
import AboutUsSection from './components/AboutUsSection'
import ProductsShowcase from './components/productSection'
import TestimonialSection from './components/TestimonialSection'
import GlobalManufacturerSection from './components/GlobalManufacturerSection'
import FAQSection from './components/FAQSection'
import GallerySection from './components/GallerySection'
import Bannerimg from './components/Bannerimg'
import ProblemSolution from './components/ProblemSolution'
import OurSolution from './components/OurSolution'
import WhyACTPL from './components/WhyChooseUs'
import DrawingRevenueModel from './components/DrawingRevenueModel'
import IndustriesWeServe from './components/IndustriesWeServe'
import CTASection from './components/CTASection'
import ParallaxSection from './components/ParallaxSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
       <HomeSlider/>
       <ProblemSolution/>
       <OurSolution/>
       <WhyACTPL/>
       <ParallaxSection img="/services/banner.png"/>
       {/* <Bannerimg/> */}
       <DrawingRevenueModel/>
       <AboutUsSection/>
       <IndustriesWeServe/>
     
       {/* <ProductsShowcase/> */}
       {/* <TestimonialSection/> */}
       {/* <GlobalManufacturerSection/> */}
       <FAQSection/>
       {/* <GallerySection/> */}
         <CTASection/>
         <Footer/>
    </div>
  )
}

export default page
