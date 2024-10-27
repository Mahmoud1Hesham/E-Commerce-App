import React, { useEffect, useState } from 'react'
import slide1 from '../../assets/slider-image-1.jpeg'
import slide2 from '../../assets/slider-image-2.jpeg'
import slide3 from '../../assets/slider-image-3.jpeg'
import banner1 from '../../assets/grocery-banner.png'
import banner2 from '../../assets/grocery-banner-2.jpeg'
import Slider from 'react-slick'

export default function MainSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return <>
        <div className="flex">
            <div className="w-3/4">
                <Slider {...settings}>
                    <img src={slide1} className='w-full h-[400px]' alt="" />
                    <img src={slide2} className='w-full h-[400px]' alt="" />
                    <img src={slide3} className='w-full h-[400px]' alt="" />
                </Slider>

            </div>
            <div className="w-1/4">
                <img src={banner1} className='w-full h-[200px]' alt="" />
                <img src={banner2} className='w-full h-[200px]' alt="" />
            </div>
        </div>

    </>
}