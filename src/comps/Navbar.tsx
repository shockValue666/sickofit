import {Link} from "react-router-dom"

const Navbar = () => {
    return(
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/roadmap">roadmap</Link>
                <br />
            </nav>
    )
}

export default Navbar;