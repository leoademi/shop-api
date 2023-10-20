import React, {useState} from 'react';
import './ProductSlideshow.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const images = [
    'coworkspace1.jpg',
    'coworkspace2.jpg',
    'coworkspace3.jpg',
];

function ProductSlideshow() {
    return (
        <div className="slideshow-container">
            <div className="text-container">
                <div className="text-card">
                    <h2>A creative workspace designed for you</h2>
                    <p>Come join us and explore new opportunities.</p>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={3000}>
                    <div>
                        <img src="coworkspace1.jpg" alt="Product 1" />
                    </div>
                    <div>
                        <img src="coworkspace2.jpg" alt="Product 2" />
                    </div>
                    <div>
                        <img src="coworkspace3.jpg" alt="Product 3" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default ProductSlideshow;