'use client'
import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextIcon from "@/assets/images/double-right.png"
import game1 from "@/assets/images/game-1.png"
import game2 from "@/assets/images/game-2.png"
import game3 from "@/assets/images/game-3.png"
import game4 from "@/assets/images/game-4.png"
import game5 from "@/assets/images/game-5.png"
import game6 from "@/assets/images/game-6.png"
import game7 from "@/assets/images/game-7.png"
let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    className: "slider_margin",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};

function SliderSection() {
    const gameImage = [game1, game2, game3, game4, game5, game6, game7]
    return (
        <div className="pb_120 pt_120" style={{ background: 'var(--body-bg)', overflow: 'hidden' }}>
            <div className="container gx-0">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-9 col-sm-8 text-center text-sm-start ">
                        <div className="slider_text">
                            <h2 className="title">FEATURED GAMES</h2>
                            <p>To meet today's challenges & earn cryptocurrency</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-3 col-md-3 col-sm-4 d-flex align-items-center justify-content-center justify-content-sm-end">
                        <div className="right-area">
                            <a href="#" className="cmn_btn cmn_btn_alt">Show all<Image src={nextIcon} width={0} height={0} alt="arrow icon" className="ms-2 mb-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {gameImage.map((img, i) => {
                    return (
                        <div className="single-item" key={i + 'abcd'}>
                            <a href="#">
                                <Image src={img} width={0} height={0} alt="game icon" className="" />
                            </a>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default SliderSection