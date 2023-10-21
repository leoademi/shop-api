import React, {useContext, useEffect, useState} from 'react';
import './header.scss';
import {useNavigate} from "react-router-dom";
import AuthContext from "../registration/AuthStore";

function Header() {
    const navigate = useNavigate();

    const { isLoggedIn, login, logout } = useContext(AuthContext);


    const handleRegisterClick = () => {
        navigate('/registration');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <header className="header">
            <div className="logo">
                <a className="link-logo" href="/">
                <img className="logo-img" src="./logo-creative.png" alt="Logo" />
                </a>
            </div>
            <div className={`menu-icon ${showMenu ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
            </div>
            <nav className={`nav ${showMenu ? 'open' : ''}`}>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
                <div className="buttons">
                    {isLoggedIn ? (
                        <button className="register-button" onClick={handleLogoutClick}>
                            Logout
                        </button>
                    ) : (
                        <>
                            <button onClick={handleRegisterClick} className="register-button">
                                Register
                            </button>
                            <button onClick={handleLoginClick} className="register-button">
                                Login
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;