import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext.jsx'
import Loader from '../Loader/Loader.jsx';
import { Link } from 'react-router-dom';

export default function Cart() {

    let { cart, updateProductCount, deleteProduct, loading, setLoading } = useContext(CartContext);

    let [productId, setProductId] = useState('');
    let [productCount, setProductCount] = useState(0);
    async function updateProduct(productId, count) {
        if (count > 0 && count < 100) {
            setProductCount(count);
            console.log(count, productId);

            setProductId(productId);
            setLoading(true);
            await updateProductCount(productId, count);
            setLoading(false);
        }
    }

    return <>
        {cart && cart.data.products && !loading ? cart.data.products.length > 0 ? (
            <div className="relative  shadow-md sm:rounded-lg mt-20 md:mt-4 mb-14 md:w-5/6 w-[72%] mx-auto overflow-scroll md:overflow-hidden">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            <th scope="col" className="border-x-2 border-x-gray-200 px-6 py-3">Image</th>
                            <th scope="col" className="border-x-2 border-x-gray-200 px-6 py-3">Product</th>
                            <th scope="col" className="border-x-2 border-x-gray-200 px-6 py-3">Qty</th>
                            <th scope="col" className="border-x-2 border-x-gray-200 px-6 py-3">Price</th>
                            <th scope="col" className="border-x-2 border-x-gray-200 px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.data.products.map((product) =>
                            <tr key={product.product.id} className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border-gray-300">
                                <td className="md:p-4">
                                    <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                                </td>
                                <td className="md:px-6 font-semibold text-gray-900 md:text-sm text-xs text-center">{product.product.title}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button onClick={() => updateProduct(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 md:me-3 me-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <span className="bg-gray-50 w-10 md:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-center "> {loading && product.product.id == productId ? <i class="fa-solid fa-spinner fa-spin-pulse"></i> : product.count}</span>
                                        </div>
                                        <button onClick={() => updateProduct(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 md:ms-3 ms-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">{product.price} EGP</td>
                                <td className="px-6 py-4">
                                    <button onClick={() => deleteProduct(product.product.id)} className="font-medium text-red-600  hover:underline">Remove</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg">
                            <td  className="p-4 text-center">
                                <h3 className="text-xl text-black">Total Cart Items: {cart.data.products.length}</h3>
                            </td>
                            <td colSpan="2" className="p-4 text-center">
                                <h3 className="text-xl text-black">Total Cart Amount: {cart.data?.totalCartPrice} EGP</h3>
                            </td>
                            <td colSpan="2" className="p-4 text-center">
                                <Link to={'/checkout'} className="bg-main text-white py-3 px-5 rounded-md hover:text-white">Check Out</Link>
                            </td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        ): <h2>This cart is empty, please buy some stuff</h2> : <Loader />}
    </>

}
