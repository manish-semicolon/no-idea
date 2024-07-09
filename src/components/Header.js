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
        window.addEventListener('scroll', () => {
            let fix_top = document.getElementById('header-section')
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                fix_top.classList.add('header_fixed')
            } else {
                fix_top.classList.remove('header_fixed')
            }
        })
    }, [])

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
            <div className='container d-flex gx-0 px-15 '>
                <div className="flex-grow-1 d-flex align-items-center">
                    <a href="/" aria-label='home'>
                        <Image src={logo} width={120} height={0} alt='home logo' />
                    </a>
                </div>
                <div className='d-lg-none ms-lg-auto d-flex align-items-center gap-4 ' onClick={handleMenu}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon_style d-lg-none' />
                    <FontAwesomeIcon icon={faBars} className='icon_style' />
                </div>
                <nav>
                    <div className='' id='menu'>
                        <ul className=''>
                            {quickLink.map((item, index) => {
                                return (
                                    <>
                                        <li key={item.name}><a href={item.path} aria-label='' style={{ color: pathname === item.path && 'var(--hover-text)' }} >{item.name}</a></li>

                                    </>
                                )
                            })}
                            <li><a class="cmn_btn cmn_btn_alt2 " href="/contactus" aria-label="">
                                <span className="position-relative">
                                    <span className='c-first'>Contact Us</span>
                                    <span className='c-second'>Contact Us</span>
                                    <span className='c-third'>Contact Us</span>
                                </span>
                            </a></li>
                            <div className="search_btn d-none d-lg-flex " onClick={handleMenu}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon_style' />
                            </div>
                        </ul>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header