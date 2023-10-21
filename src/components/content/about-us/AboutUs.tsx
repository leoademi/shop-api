import React, {useEffect, useState} from 'react';
import './AboutUs.scss'; // Import your CSS for styling

function AboutUs() {
    const images = ['/coworkspace3.jpg', '/coworkspace2.jpg', '/coworkspace1.jpg']; // Replace with your image URLs
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change image every 5 seconds (5000 milliseconds)

        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex]);

    return (
        <div className="about-us-container">
            <div className="about-us-background">
                <h1 className="about-us-header-desktop">About Us</h1>
            </div>
            <div className="about-us-content">
                <h1 className="about-us-header-mobile">About Us</h1>
                <div className="about-us-image-container">
                    <img src={images[currentImageIndex]} alt="About Us" className="about-us-image" />
                    <div className="slideshow-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="about-us-text">
                    <h2> Why Choose Us </h2>
                    <p>
                        Welcome to our blog! We are a passionate team of writers who love to share our knowledge and insights with you.
                    </p>
                    <p>
                        Our mission is to provide you with valuable content on a wide range of topics, from technology and science to lifestyle and travel.
                    </p>
                    <p>
                        We believe in the power of knowledge and the joy of exploration. Join us on this exciting journey!
                    </p>
                </div>
            </div>
        </div>
    );
}


export default AboutUs;