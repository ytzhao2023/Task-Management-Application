import React, {useState} from "react";

function Navbar({ setPage }) {

    const [isOpen, setIsOpen] = useState(false);
    
    function toggleMenu() {
        setIsOpen(!isOpen);
    };

    function changePage(e) {
        e.preventDefault();
        window.history.pushState(null, "", e.target.pathname);
        setPage(e.target.pathname);
        setIsOpen(false);
    };

    return (
        <nav className="nav">
            <button className="hamburger-menu" onClick={toggleMenu}>
                &#9776;
            </button>
            <ul className={`menu ${isOpen ? 'show' : ''}`}>
                <li><a href="/home" onClick={ changePage } >Home</a></li>
                <li><a href="/taskoverview" onClick={ changePage } >TaskOverview</a></li>
                <li><a href="/settings" onClick={ changePage } >Settings</a></li>    
            </ul>    
        </nav>
    );
}

export default Navbar;