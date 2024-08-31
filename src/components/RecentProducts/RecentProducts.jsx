import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext.jsx';
import { WishContext } from '../../Context/WishListContext.jsx';

export default function RecentProducts() {

    const [products, setProducts] = useState([])

    let {addProductsToCart} = useContext(CartContext);
    let {addToWishlist} = useContext(WishContext);

    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        setProducts(data.data)
        console.log(data.data);

    }
    useEffect(() => {
        getProducts();
    }, [])
    return <>
        {products.length ? <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">

            {products.map((product) =>
    <div className="product my-2 relative" key={product.id}>
        <div className="p-6">
            <Link to={`/productdetails/${product.id}`}>
                <img src={product.imageCover} className='w-full' alt={product.title} />
                <h3 className="fon-sm text-main">{product.category.name}</h3>
                <h3 className="text-lg">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                <div className="flex justify-between my-2">
                    <span>{product.price} EGP</span>
                    <span><i className="fas fa-star rating-color"></i> {product.ratingsAverage}</span>
                </div>
            </Link>
            <button onClick={()=> addProductsToCart(product.id)} className='btn bg-main w-full text-white rounded'>Add to Cart</button>
        </div>

        {/* Wishlist Button */}
        <button 
            onClick={() => addToWishlist(product.id)}
            className="shadow-2xl rounded-full w-7 flex items-center justify-center h-7 text-center absolute top-2 right-5 text-red-500 hover:text-red-700 transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
            <i className="far fa-heart text-2xl"></i>
        </button>
    </div>
)}

        </div> : <Loader/>}

    </>
}
