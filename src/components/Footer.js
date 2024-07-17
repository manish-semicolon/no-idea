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
            <div className="container px-15 gx-0">
                {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-top pt-120 pb-120">
                            <div className="side-contant">
                                <div className="left">
                                    <Image src={leftBg} unoptimized width={0} height={0} alt="image" className='bg' loading="lazy" />
                                    <Image src={leftCircle} unoptimized width={0} height={0} alt="image" className='bg circle ' loading="lazy" />
                                    <Image src={leftTop} unoptimized width={0} height={0} alt="image" className='top ' loading="lazy" />
                                </div>
                                <div className="right">
                                    <Image src={rightImage} unoptimized width={0} height={0} alt="image" loading="lazy" />
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
                                            <button className="cmn_btn cmn_btn_alt border-0 mb-1 ">
                                                Subscribe
                                                <span className="position-relative">
                                                    <span className='h-first'>Subscribe</span>
                                                    <span className='h-second'>Subscribe</span>
                                                    <span className='h-third'>Subscribe</span>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='d-flex flex-column flex-lg-row  justify-content-between align-content-lg-center pb_40 gap-4 gap-lg-5 pt_46'>
                    <div className='d-flex justify-content-between align-items-between flex-md-row flex-column gap-4  gap-lg-3 flex-grow-1 flex-wrap'>
                        <a href="/" aria-label='home'>
                            <Image src={logo} width={120} height={0} alt='home logo' loading="lazy" />
                        </a>
                        <ul className='d-md-flex justify-content-lg-between justify-content-center align-items-center mb-0 ps-0  text-uppercase text-nowrap gap-4 footer_link m-md-auto order-md-1 order-lg-0  '>
                            <p className='text-white fs-6 quick_link d-md-none'>Quick Link</p>
                            {quickLink.map(item => {
                                return (
                                    <li key={item.name}><a className='text-white' href={item.path} aria-label>{item.name}</a></li>
                                )
                            })}
                            <li><a className='text-white' href='/contact-us' aria-label>Contact Us</a></li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-md-center ">
                            <div className="social_area d-flex gap-2">
                                {/* <a href='#'><Image src={twitter} height={0} width={0} alt='' loading="lazy" /></a>
                                <a href='#'><Image src={facebook} height={0} width={0} alt='' loading="lazy" /></a>
                                <a href='#'><Image src={linkedin} height={0} width={0} alt='' loading="lazy" /></a>
                                <a href='#'><Image src={google} height={0} width={0} alt='' loading="lazy" /></a> */}
                                <a href="#">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.3864 16.1779L19.9084 12.769H16.6379V10.5531C16.6379 9.62097 17.096 8.71013 18.5608 8.71013H20.0469V5.80717C20.0469 5.80717 18.694 5.57812 17.405 5.57812C14.7097 5.57812 12.9466 7.21337 12.9466 10.1696V12.769H9.95312V16.1779H12.9466V24.4234H16.6326V16.1779H19.3864Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0518 6.38867H11.9467C9.0001 6.38867 6.60156 8.70984 6.60156 11.5614V18.4373C6.60156 21.2889 9.0001 23.6101 11.9467 23.6101H19.0518C21.9985 23.6101 24.397 21.2889 24.397 18.4373V11.5614C24.392 8.70984 21.9985 6.38867 19.0518 6.38867ZM15.5722 19.2402C13.1586 19.2402 11.1925 17.3376 11.1925 15.0018C11.1925 12.666 13.1586 10.7634 15.5722 10.7634C17.9858 10.7634 19.9519 12.666 19.9519 15.0018C19.9519 17.3376 17.9858 19.2402 15.5722 19.2402ZM20.2084 11.4836C19.6301 11.4836 19.1675 11.031 19.1675 10.4763C19.1675 9.91665 19.6351 9.46896 20.2084 9.46896C20.7866 9.46896 21.2492 9.92151 21.2492 10.4763C21.2543 11.031 20.7866 11.4836 20.2084 11.4836Z" fill="white" />
                                        <path d="M15.5715 12.2812C14.0227 12.2812 12.7656 13.4978 12.7656 14.9966C12.7656 16.4954 14.0227 17.7119 15.5715 17.7119C17.1202 17.7119 18.3773 16.4954 18.3773 14.9966C18.3773 13.5027 17.1202 12.2812 15.5715 12.2812Z" fill="white" />
                                    </svg>

                                </a>
                                <a href="#">
                                    <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 3H7.5C3 3 0 6 0 10.5V19.5C0 24 3 27 7.5 27H22.5C27 27 30 24 30 19.5V10.5C30 6 27 3 22.5 3ZM17.835 16.545L14.13 18.765C12.63 19.665 11.4 18.975 11.4 17.22V12.765C11.4 11.01 12.63 10.32 14.13 11.22L17.835 13.44C19.26 14.31 19.26 15.69 17.835 16.545Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
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