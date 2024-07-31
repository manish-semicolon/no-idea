import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import left_banner from "@/assets/left_banner.png"
import BreadCrumb from '@/components/BreadCrumb'

export default function page() {
    return (
        <Wrapper>
            {/* <section id="common_section" className="position-relative faq overflow-hidden " >
                <div className="banner_content d-flex align-items-center">
                    <div className="container gx-0">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Contact Us" textCenter={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="container pb_46 header_PT120 gx-0 px-15">
                <div className="faq_section text-start mb-5">
                    <h2 className="title">Contact us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 px-15 mb-5">
                        <form className='contact_form'>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder='Enter your full name' />
                            </div>
                            <div>
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="Email" id="Email" placeholder='Enter your email' />
                            </div>
                            <div>
                                <label htmlFor="Message" className='d-block'>Message</label>
                                <textarea id="Message" name="Message" className='w-100' rows="4" cols='100' placeholder='Enter your message' />
                            </div>
                            <div>
                                <button type='button' className='w-100 cmn_btn cmn_btn_alt text-center mt-3 mb-3'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 px-15">
                        <div className="faq_section mb-0">
                            <h2 className="title">Copy Right Issue</h2>
                            <p>Play in multi-player tournaments or head to head for cash prizes.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, error. </p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga nihil maxime voluptas illo suscipit deleniti consequatur soluta cupiditate nostrum rem iure quas, harum est amet reiciendis sequi vero ad libero?
                                Consectetur quo cumque qui, iusto, ducimus ipsa beatae exercitationem aperiam ea hic asperiores dicta maxime eligendi similique voluptate! Illum dolorem iusto fuga mollitia, quam saepe nam accusantium aliquam nisi accusamus?
                                Eligendi, libero nulla error iste ea, a sint animi in omnis ipsum necessitatibus eius earum! Officia saepe possimus minima mollitia sint distinctio dolore, dolor rerum expedita suscipit aliquid nostrum numquam?
                                Explicabo ut nulla nemo quidem harum! Optio fugit, quod adipisci possimus earum unde officia tempore provident nisi id doloremque eligendi illum, impedit nihil, sed aliquid necessitatibus at totam incidunt sapiente.
                                Eligendi nulla libero neque quis optio exercitationem, iste maxime incidunt amet veniam doloremque dignissimos voluptatum excepturi nam accusantium nemo aut minus est culpa. Ab autem dolorum itaque laboriosam atque exercitationem.</p>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
