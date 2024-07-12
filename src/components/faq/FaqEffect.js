import faqImage from "@/assets/images/faq-left.png"
import Image from 'next/image'

function FaqEffect({ id = "", classCss = "" }) {
    return (
        <div id={id} className={classCss}>
            <div className="left-area">
                <span className='z-1'>
                    <Image src={faqImage} width={0} height={0} alt='faq logo' className='position-relative z-2' loading="lazy" />
                </span>
            </div>
        </div>
    )
}

export default FaqEffect