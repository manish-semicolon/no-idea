import nextIcon from "@/assets/images/double-right.png"
import Image from "next/image"
// import game1 from "@/assets/images/top-game-1.png"
// import game2 from "@/assets/images/top-game-2.png"
// import game3 from "@/assets/images/top-game-3.png"
// import game4 from "@/assets/images/top-game-4.png"
// import game5 from "@/assets/images/top-game-5.png"
// import game6 from "@/assets/images/top-game-6.png"
// import game7 from "@/assets/images/top-game-7.png"
// import game8 from "@/assets/images/top-game-8.png"
import CustomButton from './CustomButton'
import game1 from "../../public/assets/icon/adventurous-ninja-run.jpg"
import game2 from "../../public/assets/icon/brave-archer.jpg"
import game3 from "../../public/assets/icon/bubble-match-sort.jpg"
import game4 from "../../public/assets/icon/candy-splash.jpg"
import game5 from "../../public/assets/icon/challenging-restaurant-activity.jpg"
import game6 from "../../public/assets/icon/Crocomunch.jpg"
import game7 from "../../public/assets/icon/fearless-warrior.jpg"
import game8 from "../../public/assets/icon/flash-memory.jpg"
import game9 from "../../public/assets/icon/flight-commander.jpg"
import game10 from "../../public/assets/icon/jumping-ninja.jpg"
import game11 from "../../public/assets/icon/jurassic-dino-adventure.jpg"
import game12 from "../../public/assets/icon/lucky-draw.jpg"
import game13 from "../../public/assets/icon/lucky-spin.jpg"
import game14 from "../../public/assets/icon/math-mastery.jpg"
import game15 from "../../public/assets/icon/pac-rolling.jpg"
import game16 from "../../public/assets/icon/rainbow-ball.jpg"
import game17 from "../../public/assets/icon/space-paint-challenge.jpg"
import game18 from "../../public/assets/icon/spilled-beans.jpg"
import game19 from "../../public/assets/icon/super-mart.jpg"
import game20 from "../../public/assets/icon/sweet-swap-puzzle.jpg"

import cup from "@/assets/logo/cup.png"
import flash from "@/assets/logo/flash.png"
import star from "@/assets/logo/star.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function GameSection({ search = true }) {
    const gameImage = [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, game16, game17, game18, game19, game20]
    return (
        <div className={`pb_120 px-15 ${search && "header_PT120"}`}>
            <div className="container gx-0">
                <div className="row justify-content-between gx-0 flex350">
                    {search && <div className="game_menu_bar">
                        <div className="row gap-lg-0 gap-3  justify-content-between" style={{ padding: '0 15px' }}>
                            <div className="col-lg-5 col-md-12">
                                <div className="input-area d-flex">
                                    <div className="icon d-flex align-items-center">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
                                    </div>
                                    <input type="text" placeholder="What’s your game?" />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 d-flex justify-content-center justify-content-lg-end">
                                <div className="d-flex justify-content-center align-items-center gap-3 game_menu_button">
                                    <a className="cmn_btn cmn_btn_alt" href="#" aria-label="">
                                        <Image src={star} width={0} height={0} alt="featured icon" />
                                        Featured
                                    </a>
                                    <a className="cmn_btn cmn_btn_alt2" href="#" aria-label="">
                                        <Image src={flash} width={0} height={0} alt="instant icon" />
                                        Instant
                                    </a>
                                    <a className="cmn_btn cmn_btn_alt2" href="#" aria-label="">
                                        <Image src={cup} width={0} height={0} alt="tournament icon" />
                                        Tournaments
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {/* <div className="col-8 text-center">
                        <div className="slider_text  mb-0 ">
                            <h2 className="title mb-0 text-start ">FEATURED GAMES</h2>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-end">
                        <div className="right-area">
                            <CustomButton name='View More' />
                        </div>
                    </div> */}
                    <div className="game_section_mt grid_game mt-3 ">
                        {gameImage.map((game, i) => {
                            return (
                                <a key={i + 'qtdes'} href="/game" className="w-100 align-content-stretch image_animation position-relative shineBtn overflow-hidden " style={{ borderRadius: '30px' }}>
                                    <Image src={game} width={0} height={0} alt="" className="w-100" style={{ height: 'auto' }} loading="lazy" />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSection