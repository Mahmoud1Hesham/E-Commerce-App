import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';

export default function Categories() {
    const [cat, setCat] = useState(null);
    async function getCategories() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
        setCat(data.data)
        console.log(cat);
    }
    useEffect(() => { getCategories() }, [getCategories])

    return <>
        <div className="text-3xl">Categories</div>
        {cat && cat.length > 0 ? <div className="grid grid-cols-4 space-x-4 space-y-4 p-4 mb-5">
            {cat.map((cat) => <figure className='group relative flex flex-col justify-center items-center overflow-hidden'>
                <img className='w-[400px] h-[400px] object-cover' src={cat.image} alt={cat.name} />
                <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
                    <h2 className='text-white text-xl'>{cat.name}</h2>
                </figcaption>
            </figure>)}
        </div> : <Loader/>}

    </>
}
