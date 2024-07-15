'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '@/assets/logo/logo.png'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { quickLink } from '@/helper/common'

function Header() {
    const pathname = usePathname()

    useEffect(() => {
        handleFlagHeader()
        window.addEventListener('scroll', () => {
            handleFlagHeader()
        })
    }, [])

    function handleFlagHeader() {
        let fix_top = document.getElementById('header-section')
        let scrollToTopBtn = document.getElementById('scrollToTopBtn')
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
            fix_top.classList.add('header_fixed')
            scrollToTopBtn.classList.add('topBtn')
        } else {
            fix_top.classList.remove('header_fixed')
            scrollToTopBtn.classList.remove('topBtn')
        }

    }

    function handleMenu() {
        let menu = document.getElementById('menu')
        if (menu.classList.contains('menu')) {
            menu.classList.remove('menu')
        } else {
            menu.classList.add('menu')
        }
    }

    return (
        <header id='header-section'>
            <div className='container d-flex gx-0 px-15 py-3 '>
                <div className="flex-grow-1 d-flex align-items-center">
                    <a href="/" aria-label='home'>
                        <Image src={logo} width={120} height={0} alt='home logo' loading="lazy" />
                    </a>
                </div>
                <div className='d-lg-none ms-lg-auto d-flex align-items-center gap-4 ' onClick={handleMenu}>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='icon_style d-lg-none' /> */}
                    <FontAwesomeIcon icon={faBars} className='icon_style' />
                </div>
                <nav>
                    <div className='' id='menu'>
                        <ul className=''>
                            {quickLink.map((item, index) => {
                                return (
                                    <a key={item.name} href={item.path} aria-label='' style={{ color: pathname === item.path && 'var(--hover-text)' }} > <li>{item.name}</li></a>
                                )
                            })}
                            <a className="cmn_btn cmn_btn_alt2" href="/contact-us" aria-label="" style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <li>
                                    Contact Us
                                    {/* <span className="position-relative">
                                        <span className='h-first'>Contact Us</span>
                                        <span className='h-second'>Contact Us</span>
                                        <span className='h-third'>Contact Us</span>
                                    </span> */}
                                </li>
                            </a>
                            {/* <div className="search_btn d-none d-lg-flex " onClick={handleMenu}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon_style' />
                            </div> */}
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header