// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Slider from 'react-slick';

// export default function CategorySlider() {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     };
//     const [categories, setCategories] = useState([])
//     async function getCategories() {
//         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
//         setCategories(data.data)
//     }

//     useEffect(() => {
//         getCategories()
//     }, [])
//     return <>

//         {categories ? <div className='mt-20 '><Slider {...settings}>
//             {categories.map((category) => <div key={category._id}>
//                 <img src={category.image} className='w-full h-[200px]' />
//                 <h2>{category.name}</h2>
//             </div>)}
//         </Slider></div> : ''}
//     </>
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
export default function CategorySlider() {
    const [categories, setCategories] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // العرض الافتراضي للشاشات العريضة
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024, // التابلت
                settings: {
                    slidesToShow: 4, // يعرض 4 صور فقط
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // الموبايل
                settings: {
                    slidesToShow: 3, // يعرض صورتين فقط
                    slidesToScroll: 1,
                }
            }
        ]
    };

    async function getCategories() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
        setCategories(data.data);
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            {categories.length > 0 && (
                <div className="mt-20">
                    <Slider {...settings}>
                        {categories.map((category) => (
                            <div key={category._id}>
                                <img src={category.image} className="w-full h-[200px]" alt={category.name} />
                                <h2>{category.name}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}
