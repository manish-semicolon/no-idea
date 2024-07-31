'use client'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ScrollDown() {
    function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <button id="scrollToTopBtn" onClick={handleClick} >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </>
    )
}

export default ScrollDown