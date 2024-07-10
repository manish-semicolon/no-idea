import Image from 'next/image'
import React from 'react'
import { quickLink } from '@/helper/common'
import logo from '@/assets/logo/logo.png'
import facebook from '@/assets/logo/facebook.png'
import twitter from '@/assets/logo/twitter.png'
import linkedin from '@/assets/logo/linkedin.png'
import google from '@/assets/logo/google.png'
import leftBg from '@/assets/images/footer-left-bg.png'
import leftTop from '@/assets/images/footer-left-top.png'
import leftCircle from '@/assets/images/footer-left-circle.png'
import rightImage from '@/assets/images/footer-right.png'

function Footer() {
    return (
        <footer>
            <div className="container px-15">
                {/* <div className="row gx-0">
                    <div className="col-lg-12 gx-0">
                        <div className='footer_top'>
                            <div className="side_contact position-relative">
                                <div className="left">
                                    <Image src={leftBg} width={0} height={0} alt="image" className='position-absolute leftBg' style={{ top: '-40px', zIndex: '5' }} />
                                    <Image src={leftTop} width={0} height={0} alt="image" className='position-absolute leftTop' style={{ left: '9.5%', zIndex: '10' }} />
                                    <Image src={leftCircle} width={0} height={0} alt="image" className='position-absolute leftCircle' style={{ top: '-40px' }} />
                                </div>
                                <div className="right">
                                    <Image src={rightImage} width={0} height={0} alt="image" className='position-absolute end-0' />
                                </div>
                            </div>
                            <div className="row justify-content-center gx-0 ">
                                <div className="col-lg-6 col-md-6 col-sm-10 px-4 px-sm-0">
                                    <div className="section-header text-center">
                                        <h4 className="title_text">Want gaming &amp; esports news straight to your inbox?</h4>
                                        <p className='footer_p'>To Get Exclusive Benefits</p>
                                    </div>
                                    <form action="#">
                                        <div className="subscribe">
                                            <input type="email" placeholder="Enter Your Email Address" />
                                            <button className="btn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-top pt-120 pb-120">
                            <div className="side-contant">
                                <div className="left">
                                    <Image src={leftBg} unoptimized width={0} height={0} alt="image" className='bg' />
                                    <Image src={leftCircle} unoptimized width={0} height={0} alt="image" className='bg circle ' />
                                    <Image src={leftTop} unoptimized width={0} height={0} alt="image" className='top ' />
                                </div>
                                <div className="right">
                                    <Image src={rightImage} unoptimized width={0} height={0} alt="image" />
                                </div>
                            </div>
                            <div className="row justify-content-center position-relative footer_contact ">
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="section-header text-center">
                                        <h4 className="title">Want gaming &amp; esports news straight to your inbox?</h4>
                                        <p>To Get Exclusive Benefits</p>
                                    </div>
                                    <form action="#">
                                        <div className="subscribe">
                                            <input type="email" placeholder="Enter Your Email Address" />
                                            <button className="btn">
                                                <span className="position-relative">
                                                    <span className='c-first'>Subscribe</span>
                                                    <span className='c-second'>Subscribe</span>
                                                    <span className='c-third'>Subscribe</span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row  justify-content-between align-content-lg-center pb_40 gap-4 gap-lg-5 pt-120'>
                    <div className='d-flex justify-content-between align-items-between flex-md-row flex-column  gap-3 flex-grow-1'>
                        <a href="/" aria-label='home'>
                            <Image src={logo} width={120} height={0} alt='home logo' />
                        </a>
                        <ul className='d-sm-flex justify-content-between align-items-center mb-0 ps-0  text-uppercase text-nowrap gap-xl-5 gap-3 footer_link  '>
                            {quickLink.map(item => {
                                return (
                                    <li key={item.name}><a className='text-white' href={item.path} aria-label>{item.name}</a></li>
                                )
                            })}
                            <li><a className='text-white' href='/contactus' aria-label>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-md-center ">
                        <div className="social_area d-flex gap-2">
                            <a href='#'><Image src={twitter} height={0} width={0} alt='' /></a>
                            <a href='#'><Image src={facebook} height={0} width={0} alt='' /></a>
                            <a href='#'><Image src={linkedin} height={0} width={0} alt='' /></a>
                            <a href='#'><Image src={google} height={0} width={0} alt='' /></a>
                        </div>
                    </div>
                </div>
                <div className='py_30 d-flex justify-content-between align-items-center copyright gap-3 '>
                    <div>
                        Copyright © 2024 - Pokiigame |  <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer