import Header from "./Header"
import Footer from "./Footer"
import ScrollDown from "./ScrollDown"

function Wrapper({ children }) {

    return (
        <div style={{ background: '#090c1d', minHeight: "100vh" }}>
            <Header />
            {children}
            <Footer />
            <ScrollDown />
        </div>
    )
}

export default Wrapper