import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import GameSection from '@/components/GameSection'
import gameJson from "@/components/gameDetails/game.json"
import { notFound } from 'next/navigation'
import game1 from '../../../public/images/logos/adventurous-ninja-run.jpg'
function page({ params }) {
    let game = gameJson.filter((item) => {
        if (item.route === params.game) {
            return item;
        }
    })
    if (game.length !== 1) {
        notFound()
    }
    console.log(game[0].image, 'game')
    return (
        <Wrapper>
            <div className="container pb_46 pt_46">
                <div className="row justify-content-center px-15">
                    <div className="col-lg-12 px-15 position-relative bg_game_img2"
                        style={{
                            backgroundImage: `url(${game[0].image})`
                        }}
                    >
                        <div className="drop_color"></div>
                        <div className="faq_section text-center d-flex flex-column align-items-center position-relative mb-2  ">
                            <h2 className="title mt-1">{game[0].name}</h2>
                            <Image src={game[0].image} width={0} height={0} alt='game name' className='detailImage' unoptimized />
                            <button type='button' className='cmn_btn cmn_btn_alt3 text-center border-0' style={{ width: '203px', marginTop: '20px', marginBottom: '10px' }}>
                                Play
                            </button>
                        </div>
                    </div>
                    <div className='col-12 game_description'>
                        <div>
                            <h2>{game[0].name}</h2>
                            <p>
                                In the gripping 2D side-scrolling action game Brave Archer, you take on the role of a valiant archer who must gather stars in 30 difficult stages set in a valley overrun by monsters. As you work to complete each level, you'll encounter dangerous terrain, formidable foes, and eye-catching designs.
                            </p>
                            <h3>How to Play</h3>
                            <p>
                                In Brave Archer, an exhilarating adventure, you must travel through perilous environments full of monsters as a proficient archer. <br /><br />To take out dangerous enemies, you must gather the dispersed stars in each level and refine your precise archery abilities.<br /><br /> Your adventure requires strategic skill and fast reactions to advance through each level, which consists of over 30 levels of increasingly difficult obstacles. As you embark on an exciting mission to subdue the monster kingdom, embrace the colorful and strikingly beautiful world.<br /><br /> Collect every star at every level to earn as many points as possible while eliminating opponents in the process.
                            </p>
                            <h3>Controls:</h3>
                            <ul>
                                <li>W - Jump</li>
                                <li>A, D - Forward, backward movement</li>
                                <li>K - Archery</li>
                                <li>Or The control buttons on the screen can be used for archery or other activities.</li>
                            </ul>
                        </div>
                        <div className='game_tag'>
                            {game[0]?.tags?.map((tags) => <span>{tags}</span>)}
                        </div>
                    </div>
                </div>
            </div>
            <GameSection search={false} />
        </Wrapper>
    )
}

export default page