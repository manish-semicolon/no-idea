import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import left_banner from "@/assets/left_banner.png"
import developer from "@/assets/developer.png"
import BreadCrumb from '@/components/BreadCrumb'

function page() {
    return (
        <Wrapper>
            <section id="common_section" className="position-relative faq overflow-hidden " >
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Developer" textCenter={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb_46 pt_46 px-15">
                <div className="row">
                    <div className="col-lg-6 text-lg-start text-center mb-lg-0 mb-5">
                        <Image src={developer} width={0} height={0} className='dev_img' alt='developer image' />
                    </div>
                    <div className="col-lg-6">
                        <div className="faq_section">
                            <h2 className="title">Developers</h2>
                            <p>PokiiGame is a top game development studio dedicated to making fun and interesting gaming experiences. In addition to creating games, we also have expertise in gaming apps and responsive game design, which ensures seamless platform integration.</p>

                            <p>Content creators on the PokiiGame platform have unparalleled control over their works. Posting, publishing, tracking, and monetizing content is made simple by our user-friendly interface. But what really sets us apart are the vibrant community and large number of visitors to PokiiGame.com, which give creators unparalleled visibility and audience access.</p>

                            <p>Imagine having the ease to bring your creations to a global audience, monetize your labor of love, and increase traffic to your games.</p>

                            <p>Developers can make a profitable business out of their passion for games with the aid of our platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default page