import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function page() {
  return (
    <div className='' style={{ background: 'var(--game-section)' }}>
      <Header />
      <div className='game_section'>
        <div className="container px-15 gx-0">
          {/* lorem*100 */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page