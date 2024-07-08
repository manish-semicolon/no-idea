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

function GameSection() {
    const gameImage = [game1, game2, game3, game4, game5, game6, game7, game8]
    return (
        <div className="pb_120 pt_120" style={{ background: '#0D0D48', overflow: 'hidden' }}>
            <div className="container gx-0">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-7 text-center text-md-start ">
                        <div className="slider_text">
                            <h2 className="title">AVAILABLE GAMES</h2>
                            <p>To meet today's challenges & earn cryptocurrency</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                        <div className="right-area d-flex flex-md-column gap-3 d-lg-block ">
                            <a href="#" className="cmn_btn cmn_btn_alt text-center">Top Games<Image src={nextIcon} width={0} height={0} alt="arrow icon" className="ms-2 mb-1" /></a>
                            <a href="#" className="cmn_btn cmn_btn_alt ms-lg-2 text-center ">Tournaments<Image src={nextIcon} width={0} height={0} alt="arrow icon" className="ms-2 mb-1" /></a>
                        </div>
                    </div>
                    <div className="row mx-0 game_section_mt ">
                        {gameImage.map((game, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-4 mb_30 text-center" key={i + 'qtdes'}>
                                    <a href="#" className="w-100">
                                        <Image src={game} width={0} height={0} alt="" className="custom_width" />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSection