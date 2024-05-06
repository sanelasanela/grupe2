import {Link} from "react-router-dom";
import './Navbar.css';
import { useState } from 'react';

import './HomeCSS.css';
import Home from "./Home.tsx";

function Navbar() {


    const [showList, setShowList] = useState(false);

    const handleHomeClick = () => {
        setShowList(true);
    };
    return (
        <nav>
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/home" onClick={handleHomeClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
                {showList && (
                    <div>
                        <Home></Home>
                    </div>

                )}
        </nav>
);
}



export default Navbar;