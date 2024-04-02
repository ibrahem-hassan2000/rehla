"use client";
import React from "react";
import Slider from "react-slick";

function SliderImages() {
  var settings = {

    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.8,
          }
        },
        
      ]
  };
  return (
    <Slider {...settings}>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider1.webp" />
      </div>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider2.webp" />
      </div>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider3.webp" />
      </div>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider1.webp" />
      </div>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider2.webp" />
      </div>
      <div className="itemImg">
        <img alt="slider img" src="/images/slider3.webp" />
      </div>
    </Slider>
  );
}

export default SliderImages;
