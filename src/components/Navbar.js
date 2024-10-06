import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Taxi Micheline's</div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Ícone de menu (hamburguer) */}
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;
