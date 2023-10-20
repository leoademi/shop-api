import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="footer">
            <div className="left-content">
                <div className="logo">Your Logo Name</div>
                <div className="social-media-icons">
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            <div className="right-content">
                <nav className="menu">
                    <a href="/contact">Contact Us</a>
                    <a href="/about">About</a>
                </nav>
            </div>
            <div className="copyright-content">
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
            </div>
        </footer>
    );
}

export default Footer;