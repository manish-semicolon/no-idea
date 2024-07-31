import Blog from '@/components/Blog'
import FAQ from '@/components/faq/FAQ'
import Footer from '@/components/Footer'
import GameSection from '@/components/GameSection'
import Header from '@/components/Header'
import ScrollDown from '@/components/ScrollDown'
import SliderSection from '@/components/SliderSection'
import React from 'react'

function page() {
  return (
    <div className='position-relative' style={{ background: '#090c1d', minHeight: '100vh' }}>
      {/* <div className="de-gradient-edge-top"></div>
      <div className="de-gradient-edge-bottom"></div> */}
      <Header />
      {/* <SliderSection /> */}
      <GameSection />
      <Blog />
      <div className='mt-4 px-15'>
        <FAQ />
      </div>
      <Footer />
      <ScrollDown />
    </div>
  )
}

export default page