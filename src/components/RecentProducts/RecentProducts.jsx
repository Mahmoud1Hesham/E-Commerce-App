import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function RecentProducts() {

    const [products, setProducts] = useState([])

    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        setProducts(data.data)
        console.log(data.data);

    }
    useEffect(() => {
        getProducts();
    }, [])
    return <>
        {products.length ? <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            {products.map((product) =>
                <div className="product my-2" key={product.id}>
                    <Link to={`/productdetails/${product.id}`}>
                    <div className="p-2">
                        <img src={product.imageCover} className='w-full' alt={product.title} />
                        <h3 className="fon-sm text-main">{product.category.name}</h3>
                        <h3 className="text-lg">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                        <div className="flex justify-between my-2">
                            <span>{product.price} EGP</span>
                            <span><i className="fas fa-star rating-color"></i> {product.ratingsAverage}</span>
                        </div>
                        <button className='btn bg-main w-full text-white rounded'>Add to Cart</button>
                    </div>
                    </Link>
                </div>
            )}
        </div> : <Loader/>}

    </>
}
