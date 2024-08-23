import React, { useEffect, useState } from 'react'

export default function RelativeProducts() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
  };

    return <>
        <div className="slider-container">
      <Slider {...settings}>
       
      </Slider>
    </div>
    </>
}
