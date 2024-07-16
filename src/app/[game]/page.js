import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import left_banner from "@/assets/left_banner.png"
import BreadCrumb from '@/components/BreadCrumb'
import gameBanner from '@/assets/games_banner.png'
import game1 from "../../../public/assets/icon/adventurous-ninja-run.jpg"

function page() {
    return (
        <Wrapper>
            <section id="common_section" className="position-relative faq overflow-hidden g_section" >
                <div className="banner_content d-flex align-items-center">
                    <div className="container">
                        {/* <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" /> */}
                        <Image src={gameBanner} width={0} height={0} alt='game banner' className='game_banner position-absolute bottom-0 end-0' />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12  flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Game" />
                                {/* <FaqEffect id="faq-section" classCss="faq-page" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container pb_46 pt_46">
                <div className="row justify-content-center ">
                    <div className="col-lg-8 px-15">
                        <div className="faq_section text-center d-flex flex-column align-items-center ">
                            <h2 className="title">Skibidi Toilet</h2>
                            <Image src={game1} width={0} height={0} alt='game name' />

                            <button type='button' className='cmn_btn cmn_btn_alt3 text-center mt-3 mb-3 border-0' style={{ width: '203px' }}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='col-12 game_description'>
                        <div>
                            <h2>Brave Archer</h2>
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
                            <span>Archery</span>
                            <span>Archery</span>
                            <span>Archery</span>
                            <span>Archery</span>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default page