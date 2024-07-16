import Wrapper from '@/components/Wrapper'
import left_banner from "@/assets/left_banner.png"
import ribbon from "@/assets/images/ribbon_bg.png"
import BreadCrumb from '@/components/BreadCrumb'
import Image from 'next/image'

function page() {
    return (
        <Wrapper>
            <section id="common_section" className="position-relative faq overflow-hidden " >
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Affiliates" textCenter={true} />
                                {/* <FaqEffect id="faq-section" classCss="faq-page" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb_46 pt_46">
                <div className="row justify-content-md-center gap-md-0 gap-4 ">
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
            </div>
        </Wrapper>
    )
}

export default page