import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Restaurant Logo</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link className="nav-link" to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={onLogout} className="nav-link logout-button">Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
