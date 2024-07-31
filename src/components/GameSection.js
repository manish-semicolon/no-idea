'use client'
import gameJson from "@/components/gameDetails/game.json"
import Image from "next/image"
import cup from "@/assets/logo/cup.png"
import flash from "@/assets/logo/flash.png"
import star from "@/assets/logo/star.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function GameSection({ search = true }) {
    const [gameList, setGameList] = useState(gameJson || []);

    function handleInputChange(e) {
        console.log(e.target.value);
        let filterData = gameJson.filter((game) => game.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setGameList(filterData)
    }

    return (
        <div className={`pb_120 px-15 ${search && "header_PT120"}`}>
            <div className="container gx-0">
                <div className="row justify-content-between gx-0 flex350">
                    {search && <div className="game_menu_bar">
                        <div className="row gap-lg-0 gap-3  justify-content-between res_input" style={{ padding: '0 15px' }}>
                            <div className="col-lg-5 col-md-12">
                                <div className="input-area d-flex">
                                    <div className="icon d-flex align-items-center">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='' />
                                    </div>
                                    <input type="search" placeholder="Search for games" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 d-flex justify-content-center justify-content-lg-end">
                                <div className="d-flex flex-sm-row justify-content-center align-items-center gap-3 game_menu_button">
                                    <a className="cmn_btn cmn_btn_alt" href="#" aria-label="">
                                        <div>
                                            <Image src={star} width={0} height={0} alt="featured icon" />
                                        </div>
                                        Featured
                                    </a>
                                    <a className="cmn_btn cmn_btn_alt2 res_input_btn" href="#" aria-label="">
                                        <div>
                                            <Image src={flash} width={0} height={0} alt="instant icon" />
                                        </div>
                                        Instant
                                    </a>
                                    <a className="cmn_btn cmn_btn_alt2" href="#" aria-label="">
                                        <div>
                                            <Image src={cup} width={0} height={0} alt="tournament icon" />
                                        </div>
                                        Tournaments
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {gameList.length > 0 ? <div className="game_section_mt grid_game mt-3 ">
                        {gameList.map((game, i) => {
                            return (
                                <a key={game.route} href={game.route} className="w-100 align-content-stretch image_animation position-relative shineBtn overflow-hidden " style={{ borderRadius: '30px' }}>
                                    <Image src={game.image} width={0} height={0} alt="" unoptimized className="w-100" style={{ height: 'auto' }} loading="lazy" />
                                    <div className="game_des_details ">
                                        <p>{game.name}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div> :
                        <div className="text-center mt-3">
                            <h2 className="not_found mb-0">Search results not found</h2>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default GameSection