import blog_1 from "@/assets/blog/blog_1.png"
import BreadCrumb from "@/components/BreadCrumb"
import left_banner from "@/assets/left_banner.png"

import Wrapper from "@/components/Wrapper"
import Image from "next/image"
import Blog from "@/components/Blog"

function page() {
    return (
        <Wrapper>
            {/* <section id="common_section" className="position-relative faq overflow-hidden" >
                <div className="banner_content d-flex align-items-center">
                    <div className="container gx-0">
                        <Image src={left_banner} width={0} height={0} alt="left banner" className="left_banner" />
                        <div className="row d-flex justify-content-start position-relative ">
                            <div className="col-lg-12 d-flex justify-content-between align-items-center flex-sm-row flex-column gap-5 gap-sm-0 ">
                                <BreadCrumb name="Blog" textCenter={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div className="container blog_title" style={{ paddingBottom: "80px" }}>
                    <h2>The Best Kid-Friendly Games of 2024 : Embracing the Digital Age of Fun and Education.</h2>
                    <p>27.03.2024</p>
                    <Image src={blog_1} width={0} height={0} className="w-100 h-auto" alt="blog1" />
                    <div className='col-12 game_description blog_li'>
                        <div>
                            <h2>Introduction</h2>
                            <p>
                                Selecting the best games for children in the constantly evolving gaming industry can be both exciting and challenging. In 2024, young players can anticipate a fresh wave of engaging and creative games that blend entertainment and education. For kids of all ages, these top kid-friendly games of 2024 provide endless hours of fun and education, from fostering creativity to honing critical thinking skills.
                            </p>
                            <ol type="i" >
                                <li>
                                    <h4>Super Mario Maker 3:</h4>
                                    <ul>
                                        <li>
                                            Let your imagination run wild as you create, share, and enjoy creating your own Mario levels.
                                        </li>
                                        <li>Let your imagination run wild as you create, share, and enjoy creating your own Mario levels</li>
                                    </ul>
                                    <br />

                                </li>
                                <li>
                                    <h4>Super Mario Maker 3:</h4>
                                    <ul>
                                        <li>
                                            Let your imagination run wild as you create, share, and enjoy creating your own Mario levels.
                                        </li>
                                        <li>Let your imagination run wild as you create, share, and enjoy creating your own Mario levels</li>
                                    </ul>
                                    <br />
                                </li>
                                <li>
                                    <h4>Super Mario Maker 3:</h4>
                                    <ul>
                                        <li>
                                            Let your imagination run wild as you create, share, and enjoy creating your own Mario levels.
                                        </li>
                                        <li>Let your imagination run wild as you create, share, and enjoy creating your own Mario levels</li>
                                    </ul>
                                    <br />
                                </li>
                                <li>
                                    <h4>Super Mario Maker 3:</h4>
                                    <ul>
                                        <li>
                                            Let your imagination run wild as you create, share, and enjoy creating your own Mario levels.
                                        </li>
                                        <li>Let your imagination run wild as you create, share, and enjoy creating your own Mario levels</li>
                                    </ul>
                                    <br />
                                </li>
                                <li>
                                    <h4>Super Mario Maker 3:</h4>
                                    <ul>
                                        <li>
                                            Let your imagination run wild as you create, share, and enjoy creating your own Mario levels.
                                        </li>
                                        <li>Let your imagination run wild as you create, share, and enjoy creating your own Mario levels</li>
                                    </ul>
                                    <br />
                                </li>
                            </ol>
                            <div>
                                <h4>Conclusion:</h4>
                                <p>With these top kid-friendly games of 2024, young players can go on exhilarating adventures, visit fantastical worlds, and learn essential skills in an enjoyable and secure environment. Whether making levels, solving puzzles, or racing through colorful environments, these games offer the perfect mix of fun and education for children of all ages. By choosing exciting and engaging gaming experiences, parents and educators can support children's development and ignite their passion for gaming in the digital age.</p>
                            </div>
                        </div>
                        <div className='game_tag'>
                            <span>Action Game</span>
                            <span>Arcade Game</span>
                            <span>Mystery Game</span>
                            <span>Adventure Game</span>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="header_PT120">
                <Blog show={false} />
            </div>
        </Wrapper>
    )
}

export default page