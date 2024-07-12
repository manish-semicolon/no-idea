import BreadCrumb from '@/components/BreadCrumb'
import Wrapper from '@/components/Wrapper'
import CustomButton from '@/components/CustomButton'
import AboutImage from '@/assets/about-us-right.png'
import AboutContent from '@/assets/about-content.png'

import Image from 'next/image'

function page() {
    return (
        <Wrapper>
            <section id="common_section" className="position-relative about_u faq">
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        <Image src={AboutImage} width={0} height={0} alt='about banner' className='banner-side' />
                        <div className="row d-flex justify-content-start">
                            <div className="col-lg-12  bread_12">
                                <BreadCrumb name="About Us" />
                            </div>
                            <div class="banner-bottom about">
                                <div class="overlay">
                                    <div class="container wow fadeInUp gx-0">
                                        <div class="main-content">
                                            <Image src={AboutContent} width={0} height={0} alt='about content' className='ban-img' />
                                            <div class="item-area">
                                                <div class="row justify-content-center d-flex">
                                                    <div class="col-lg-10 content-item d-flex gx-0">
                                                        <div class="col">
                                                            <div class="single-item text-center">
                                                                <h2 className='common_sectionh2 mb-0'>200*</h2>
                                                                <p className='mb-0'>We're proud of our partners</p>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="single-item text-center">
                                                                <h2 className='common_sectionh2 mb-0'>20 mil.</h2>
                                                                <p className='mb-0'>A happy is a loyal customer</p>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="single-item mb-cus text-center">
                                                                <h2 className='common_sectionh2 mb-0'>2010—</h2>
                                                                <p className='mb-0'>We've been Gaming company since</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='about_text '>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 className="common_sectionh2">THE STORY BEHIND GAINIO TEAM</h2>
                            <p>Welcome to Gainio — a perfect place to chill and enjoy some high-level entertainment. The best part? Everything is available for you right here! Enjoy our rich array of charming slots, card games, lotteries, and VIP level treatment!</p>
                            <CustomButton name="Contact Us" url='/contact-us' icon={false} />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export default page