import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GameSection from '@/components/GameSection'
import Header from '@/components/Header'
import SliderSection from '@/components/SliderSection'
import React from 'react'

function page() {
  return (
    <div className='' style={{ background: '#090c1d', minHeight: "100vh" }}>
      <Header />
      {/* <div className=''> */}
      {/* <div className="container px-15 gx-0">
        lorem*15
        </div> */}
      <SliderSection />
      {/* </div> */}
      <GameSection />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page