import {Link} from "react-router-dom";
import './Navbar.css';


function Navbar() {
    return (

<nav>
        <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
        </div>

</nav>
);
}

export default Navbar;