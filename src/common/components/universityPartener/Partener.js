import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partener = () => {
  const partnerLogos = [
    { id: 1, logo: 'https://via.placeholder.com/150x50?text=University+1' },
    { id: 2, logo: 'https://via.placeholder.com/150x50?text=University+2' },
    { id: 3, logo: 'https://via.placeholder.com/150x50?text=University+3' },
    { id: 4, logo: 'https://via.placeholder.com/150x50?text=University+4' },
    { id: 5, logo: 'https://via.placeholder.com/150x50?text=University+5' },
  ];

  const settings = {
    dots: false, // hide the dots
    infinite: true,
    speed: 10000, // speed of scrolling (larger means slower)
    slidesToShow: 3, // number of logos visible at once
    slidesToScroll: 1,
    autoplay: true, // autoplay the carousel
    autoplaySpeed: 0, // set to 0 for continuous scrolling
    cssEase: 'linear', // linear scrolling for a smooth effect
    pauseOnHover: false,
    arrows: false, // remove arrows
    variableWidth: true, // this allows logos of varying widths
  };

  return (
    <div className="mt-10">
      <div className="text-center mb-8">
        <h1 className="text-[40px] font-bold">Our University Partners</h1>
      </div>
      <div className="max-w-screen-lg mx-auto overflow-hidden">
        <Slider {...settings}>
          {partnerLogos.map((partner) => (
            <div key={partner.id} className="p-2">
              <img src={partner.logo} alt={`Partner ${partner.id}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partener;
