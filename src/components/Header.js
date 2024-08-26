import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
        <div className="logo">Shop Now</div>
        <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">New Product</a>
        </nav>
        </header>
    );
};

export default Header;
