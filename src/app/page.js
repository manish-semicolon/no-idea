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
    <div className='' style={{ background: '#090c1d' }}>
      <Header />
      <SliderSection />
      <GameSection />
      <Blog />
      <FAQ />
      <Footer />
      <ScrollDown />
    </div>
  )
}

export default page