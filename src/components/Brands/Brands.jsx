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
    useEffect(() => { getBrands() }, [getBrands])


    return <>
        <div className="text-3xl">Brands</div>
        {brands && brands.length > 0 ? <div className="grid grid-cols-4 space-x-4 space-y-7 p-4 mb-5">
            {brands.map((brands) => <figure className='group relative flex flex-col justify-center items-center overflow-hidden shadow-lg rounded-md hover:scale-110 ease-in-out transition-all duration-500'>
                <img className=' object-cover' src={brands.image} alt={brands.name} />
                {/* <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
                    <h2 className='text-white'>{brands.name}</h2>
                </figcaption> */}
            </figure>)}
        </div> : <Loader/>}
    </>
}
