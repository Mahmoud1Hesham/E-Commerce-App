import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx';
import Slider from 'react-slick';

export default function ProductDetails() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    let { id } = useParams()
    const [details, setDetails] = useState(null);

    async function getDetails(productId) {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
            setDetails(data.data)
        } catch (err) {
            console.log(err);
            setDetails(err.response.data.message)
        }
    }
    useEffect(() => {
        getDetails(id)
    })
    return <>
        <div className="text-3xl">ProductDetails</div>
        {details ? details == 'fail' ? <h1>Product not found</h1> : <div className='flex items-center w-5/6 mx-auto space-x-4 p-5'>
            <div className="w-1/4">
                <Slider {...settings}>
                    {details.images.map((image, idx) => <img key={idx} src={image} className='w-full' />)}
                </Slider>
            </div>
            <div className="w-3/4">
                <h2 className="text-xl">{details.title}</h2>
                <p className="text-gray-500 font-sm p-2">{details.description}</p>
                <h2>{details.category.name}</h2>
                <div className="flex justify-between my-2">
                    <span>{details.price} EGP</span>
                    <span><i className="fas fa-star rating-color"></i> {details.ratingsAverage}</span>
                </div>
                <button className='btm bg-main w-full text-white rounded'>Add to Cart</button>
            </div>
        </div> : <Loader />}
    </>
}
