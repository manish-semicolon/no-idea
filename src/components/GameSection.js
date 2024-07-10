import nextIcon from "@/assets/images/double-right.png"
import Image from "next/image"
import game1 from "@/assets/images/top-game-1.png"
import game2 from "@/assets/images/top-game-2.png"
import game3 from "@/assets/images/top-game-3.png"
import game4 from "@/assets/images/top-game-4.png"
import game5 from "@/assets/images/top-game-5.png"
import game6 from "@/assets/images/top-game-6.png"
import game7 from "@/assets/images/top-game-7.png"
import game8 from "@/assets/images/top-game-8.png"
import CustomButton from './CustomButton'

function GameSection() {
    const gameImage = [game1, game2, game3, game4, game5, game6, game7, game8]
    return (
        <div className="pb_120 px-15" style={{ overflow: 'hidden' }}>
            <div className="container gx-0">
                <div className="row justify-content-between gx-0 flex350">
                    <div className="col-6 text-center">
                        <div className="slider_text  mb-0 ">
                            <h2 className="title mb-0 text-start ">FEATURED GAMES</h2>
                        </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <div className="right-area">
                            {/* <a href="#" className="cmn_btn cmn_btn_alt">Show all<Image src={nextIcon} width={0} height={0} alt="arrow icon" className="ms-2 mb-1" /></a> */}
                            <CustomButton name='View More' />
                        </div>
                    </div>
                    <div className="game_section_mt grid_game mt-3 ">
                        {gameImage.map((game, i) => {
                            return (
                                <a key={i + 'qtdes'} href="#" className="w-100 align-content-stretch ">
                                    <Image src={game} width={0} height={0} alt="" className="w-100" style={{ height: 'auto' }} />
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