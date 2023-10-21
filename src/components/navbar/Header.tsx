import React from 'react';
import './header.scss';
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/registration');
    };
    return (
        <header className="header">
            <div className="logo">Your Logo</div>
            <nav className="nav">
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
            </nav>
            <button onClick={handleRegisterClick} className="register-button">Register</button>
        </header>
    );
}

export default Header;