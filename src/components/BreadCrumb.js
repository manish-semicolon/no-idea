
function BreadCrumb({ name = "", textCenter, subName = '' }) {
    function capitalizeFirstLatter(name) {
        let [first, ...other] = name
        return first.toUpperCase() + other.join('')
    }
    return (
        <div className={`text-area ${textCenter ? "text-center text-sm-start" : ""} `}>
            <h1 className="mb-0">{name}</h1>
            <div className="nav_bred_area">
                <nav aria-label="nav_bred" className="nav_bred">
                    <a href={subName ? '/blog' : '/'}>{subName !== "" ? capitalizeFirstLatter(subName) : "Home"}</a>
                    <p href="#">{name}</p>
                </nav>
            </div>
        </div>
    )
}

export default BreadCrumb