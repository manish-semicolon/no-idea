import CustomDrop from '@/components/faq/CustomDrop'
import FaqEffect from '@/components/faq/FaqEffect'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import left_banner from "@/assets/left_banner.png"
import BreadCrumb from '@/components/BreadCrumb'

export default function page() {
    return (
        <Wrapper>
            <section id="common_section" className="position-relative faq overflow-hidden " >
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Faq" textCenter={true} />
                                <FaqEffect id="faq-section" classCss="faq-page" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb_46 pt_46">
                <div className="row justify-content-center ">
                    <div className="col-lg-8 px-15 pb-4">
                        <div className="faq_section text-center">
                            <h2 className="title">frequently asked questions</h2>
                            <p>Play in multi-player tournaments or head to head for cash prizes.</p>
                        </div>
                        <CustomDrop defaultActiveKey={false} />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
