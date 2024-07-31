import nextIcon from "@/assets/images/double-right.png"
import blog_1 from "@/assets/blog/blog_1.png"
import Image from "next/image"
import CustomButton from './CustomButton'

function Blog({ show = true }) {
    return (
        <div className="container gx-0 px-15 blog_container pb_120">
            <div className="row justify-content-between mb-3 gx-0 flex350" >
                <div className="col-8 text-center">
                    {show ? <div className="slider_text  mb-0 ">
                        <h2 className="title mb-0 text-start ">Blog</h2>
                    </div> :
                        <div className="faq_section text-start mb-0">
                            <h2 className="title">Blog</h2>
                        </div>
                    }
                </div>
                {show && <div
                    className="col-4 d-flex align-items-center justify-content-end">
                    <div className="right-area">
                        {/* <a href="#" className="cmn_btn cmn_btn_alt">Show all<Image src={nextIcon} width={0} height={0} alt="arrow icon" className="ms-2 mb-1" /></a> */}
                        <CustomButton name='Show all' url='/blog' />
                    </div>
                </div>}
            </div>
            <div className="row gap-3 gap-md-0">
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
                <a href='/blog/how-become' aria-label="blog details" className="col-lg-4 col-md-6 mb-3">
                    <div className="w-100">
                        <Image src={blog_1} unoptimized width={0} height={0} alt="blog1" className="w-100 h-auto round_30" loading="lazy" />
                    </div>
                    <div className="mt-1 blog_txt_section">
                        <p className="mb-1">27.03.2024</p>
                        <h4 className="title mb-0">The Best Kid-Friendly Games of 2024</h4>
                        <p className="mb-0">Embracing the Digital Age of Fun and Education.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Blog