import Header from "./Header"
import Footer from "./Footer"
import ScrollDown from "./ScrollDown"

function Wrapper({ children }) {

    return (
        <div style={{ background: '#090c1d' }}>
            <Header />
            {children}
            <Footer />
            <ScrollDown />
        </div>
    )
}

export default Wrapper