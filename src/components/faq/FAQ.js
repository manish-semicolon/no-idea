import CustomDrop from "./CustomDrop";
import FaqEffect from "./FaqEffect";

function FAQ() {

    return (
        <section id="faq-section">
            {/* <section id="faq-section" style={{ background: '#00093E' }}> */}
            <div className="pb_120 pt_100">
                <div className="container">

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 d-flex align-items-center custom-mb">
                            <FaqEffect />
                        </div>
                        <div className="col-lg-7 gx-0 position-relative ">
                            <div className="row justify-content-center text-lg-start text-center">
                                <div className="col-12">
                                    <div className="section-header faq_text">
                                        <h2 className="title">Our most common questions</h2>
                                        <p className='text-lg-start text-center m-0'>Do you have a question about game? Please contact us!</p>
                                    </div>
                                </div>
                            </div>
                            <CustomDrop />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ