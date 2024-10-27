import React, { useContext, useEffect, useState } from 'react'
import { WishContext } from '../../Context/WishListContext';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function WishList() {


    let { wish, deleteWishedProduct, loading } = useContext(WishContext);


    return <>
        {wish && wish.data && !loading ? wish.data.length > 0 ? (
            <div className="relative  shadow-md sm:rounded-lg mt-20 md:mt-4 mb-14 md:w-5/6 w-[91%] mx-auto  ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Product</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wish.data.map((wish) =>
                            // <tr key={wish._id} className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg">

                            //     <td className="p-4">
                            //         <img src={wish.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={wish.title} />
                            //     </td>
                            //     <td className="px-6 py-4 font-semibold text-gray-900 ">{wish.title}</td>
                            //     <td className="px-6 py-4 font-semibold text-gray-900 ">{wish.price} EGP</td>
                            //     <td className="px-6 py-4">
                            //         <button onClick={() => deleteWishedProduct(wish._id)} className="font-medium text-red-600  hover:underline">Remove</button>
                            //     </td>

                            // </tr>
                            <tr key={wish._id} className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg">
                                <td className="p-4">
                                    <Link to={`/productdetails/${wish.id}`}>
                                        <img src={wish.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={wish.title} />
                                    </Link>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    <Link to={`/productdetails/${wish.id}`}>
                                        {wish.title}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    <Link to={`/productdetails/${wish.id}`}>
                                        {wish.price} EGP
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => deleteWishedProduct(wish._id)} className="font-medium text-red-600 hover:underline">Remove</button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div >
        ) : <h2>Add something to the wishlist </h2> : <Loader />
        }
    </>
}
