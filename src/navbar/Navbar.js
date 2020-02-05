import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="primary-navbar">
            <span className="navbar-container-title">
                LCS Pick'Em
            </span>
            <span className="navbar-container-home">
                <Link to="/home">Home</Link>
            </span>
            <span className="navbar-container-login">
                <Link to="/login">Login</Link>
            </span>
            <span className="primary-overlay-navbar"></span>
        </nav>
    )
}

export default Navbar;