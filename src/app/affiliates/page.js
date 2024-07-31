import Wrapper from '@/components/Wrapper'
import left_banner from "@/assets/left_banner.png"
import ribbon from "@/assets/images/ribbon_bg.png"
import BreadCrumb from '@/components/BreadCrumb'
import AboutContent from '@/assets/about-content.png'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'

function page() {
    return (
        <Wrapper>
            {/* <section id="common_section" className="position-relative faq overflow-hidden " >
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 gx-0">
                                <BreadCrumb name="Affiliates" textCenter={true} />\
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="container pb_46 header_PT120 gx-0 custom_height px-15" >
                <div className="row justify-content-md-center gap-md-0 gap-4" >
                    <div className="faq_section text-start mb-0">
                        <h2 className="title">Affiliate</h2>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-3 affiliate_wrapper">
                        <div className='aff_div'>
                            <div className='affiliate_section '>
                                <Image src={ribbon} width={0} height={0} alt="left banner" className="left_banner w-100" />
                                <h3 className=''>Join the Affiliate Network</h3>
                            </div>
                            <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-3 affiliate_wrapper">
                        <div className='aff_div'>
                            <div className='affiliate_section '>
                                <Image src={ribbon} width={0} height={0} alt="left banner" className="left_banner w-100" />
                                <h3 className=''>Promote our website</h3>
                            </div>
                            <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-3 affiliate_wrapper">
                        <div className='aff_div'>
                            <div className='affiliate_section '>
                                <Image src={ribbon} width={0} height={0} alt="left banner" className="left_banner w-100" />
                                <h3 className=''>Grab your commission</h3>
                            </div>
                            <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                        </div>
                    </div>

                </div>
            </div> */}
            <section className='header_PT120 px-15'>
                <div className="container gx-0 px-15">
                    <div className="faq_section text-start mb-5">
                        <h2 className="title">Affiliates</h2>
                    </div>
                    <div className="main-content">
                        <Image src={AboutContent} width={0} height={0} alt='about content' className='ban-img' />
                        {/* <div className="item-area">
                            <div className="row justify-content-center d-flex">
                                <div className="content-item d-flex gx-0">
                                    <div className="col">
                                        <div className="single-item text-center">
                                            <h2 className='common_sectionh2 mb-0'>200*</h2>
                                            <p className='mb-0'>We're proud of our partners</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="single-item text-center">
                                            <h2 className='common_sectionh2 mb-0'>20 mil.</h2>
                                            <p className='mb-0'>A happy is a loyal customer</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="single-item mb-cus text-center">
                                            <h2 className='common_sectionh2 mb-0'>2010—</h2>
                                            <p className='mb-0'>We've been Gaming company since</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='container affiliates_section'>
                <div className="row justify-content-center">
                    <div className='col-md-6 col-12 pt-4'>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>
                    <div className='col-md-6 col-12 pt-4 '>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>
                    <div className='col-md-6 col-12 pt-4 '>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>
                    <div className='col-md-6 col-12 pt-4 '>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>
                    <div className='col-md-6 col-12 pt-4 '>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>
                    <div className='col-md-6 col-12 pt-4 '>
                        <h3 className=''>Grab your commission</h3>
                        <p className='mb-0'>Are you ready to turn your passion for video games into a steady source of money? Sign up for our affiliate program now to begin bringing your audience engaging gaming content and earning commissions.</p>
                    </div>

                </div>
            </section>
        </Wrapper>
    )
}

export default page