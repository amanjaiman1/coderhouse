import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import { testimonialData } from '../../data';

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        adaptiveHeight: true,
        arrows: false,
        prevArrow: <button className="slick-prev">{"<"}</button>,
        nextArrow: <button className="slick-next">{">"}</button>,
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star">&#9733;</span>);
        }

        if (halfStar) {
            stars.push(<span key="half" className="star half">&#9733;</span>);
        }

        return stars;
    };

    return (
        <div className="testimonials-container">
            <Slider {...settings}>
                {testimonialData.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <div className="imageDiv">
                            <img
                                src={testimonial.photo}
                                alt={testimonial.name}
                                className="testimonial-photo"
                            />
                        </div>
                        <div className="testimonial-content">
                            <div className="testimonial-text">
                                <div className="testimonial-name">{testimonial.name}</div>
                                <div className="testimonial-rating">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <div className="testimonial-review">{testimonial.review}</div>
                                <div className="testimonial-main">{testimonial.main}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
