import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/help-center">Help Center</Link>
                <Link to="/add-product">Add Product</Link>
            </nav>
        </header>
    );
};

export default Header;
