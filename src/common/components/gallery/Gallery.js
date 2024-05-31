import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';
import { Title } from '../title';

const Gallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        arrows: false
    };

    const images = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3',
        'https://via.placeholder.com/800x400?text=Image+4'
    ];

    return (
        <div className="gallery-container">
            <Title title = {'Our Moments'} />
            <br />
            <Slider {...settings}>
                {images.map((url, index) => (
                    <div key={index} className="slide">
                        <img src={url} alt={`Slide ${index + 1}`} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Gallery;
