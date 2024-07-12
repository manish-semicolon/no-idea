
function BreadCrumb({ name = "", textCenter }) {
    return (
        <div className={`text-area ${textCenter ? "text-center text-sm-start" : ""} `}>
            <h1 className="mb-0">{name}</h1>
            <div className="nav_bred_area">
                <nav aria-label="nav_bred" className="nav_bred">
                    <a href="/">Home</a>
                    <a href="#">{name}</a>
                </nav>
            </div>
        </div>
    )
}

export default BreadCrumb