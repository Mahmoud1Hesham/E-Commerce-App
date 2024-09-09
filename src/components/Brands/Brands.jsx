import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';

export default function Brands() {
    const [brands, setBrands] = useState(null);
    async function getBrands() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
        setBrands(data.data)
        console.log(brands);
    }
    useEffect(() => { getBrands() }, [])


    return <>
        {brands && brands.length > 0 ? <div className="grid xl:grid-cols-4 md:grid-cols-3 space-x-4 space-y-7 p-4 mb-5">
            {brands.map((brands) => <figure key={brands._id} className='group relative flex flex-col justify-center items-center overflow-hidden shadow-lg rounded-md hover:scale-110 ease-in-out transition-all duration-500'>
                <img className=' object-cover' src={brands.image} alt={brands.name} />
            </figure>)}
        </div> : <Loader/>}
    </>
}
