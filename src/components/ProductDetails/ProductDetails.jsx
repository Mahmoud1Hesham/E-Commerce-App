import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader.jsx';
import Slider from 'react-slick';
import RelatedProducts from '../RelatedProducts/RelatedProducts.jsx';
import { CartContext } from '../../Context/CartContext.jsx';

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
    let { addProductsToCart } = useContext(CartContext);
    async function getDetails(productId) {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
            setDetails(data.data)
            console.log(data.data);

        } catch (err) {
            console.log(err);
            setDetails(err.response.data.message)
        }
    }
    useEffect(() => {
        getDetails(id)
    }, [id])
    return <>
        {details ? details == 'fail' ? <h1>Product not found</h1> : <div className='flex flex-wrap items-center w-5/6 mx-auto space-x-4 space-y-16 px-5 py-20'>
            <div className="w-3/4 mx-auto md:w-1/4">
                <Slider {...settings}>
                    {details.images.map((image, idx) => <img key={idx} src={image} className='w-full' />)}
                </Slider>
            </div>
            <div className="md:w-[72%] text-center">
                <h2 className="text-xl">{details.title}</h2>
                <p className="text-gray-500 font-sm p-2">{details.description}</p>
                <h2>{details.category.name}</h2>
                <div className="flex justify-between my-2">
                    <span>{details.price} EGP</span>
                    <span><i className="fas fa-star rating-color"></i> {details.ratingsAverage}</span>
                </div>
                <button onClick={()=>addProductsToCart(details.id)} className='btm bg-main w-full text-white rounded'>Add to Cart</button>
            </div>
            <div className="w-full">
                <div className="shadow-md rounded-md w-1/2 mx-auto px-5 py-2 ">
                <h1 className='text-center text-xl '>You might be interested also in </h1>
                </div>
            <RelatedProducts catId={details.category._id} />
            </div>
        </div> : <Loader />}
    </>
}
