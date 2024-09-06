import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext.jsx'
import Accordion from '../Accordion/Accordion.jsx';


export default function AllOrders() {
    let { userId, getUserOrders, orders } = useContext(CartContext);

    useEffect(() => {
        if (userId) {
            getUserOrders(userId);
        }
    }, [userId]);
    return <>
        {/* cart && cart.data.products ? cart.data.products.length > 0 ? ( */}
        {/* { orders.map((order, idx) => {
            <Accordion title={idx + 1} answer={<tr key={order.cartItems.id} className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg">
                <td className="p-4">
                    <img src={order.cartItems.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">{order.cartItems.product.title}</td>
                <td className="px-6 py-4">
                    <div className="flex items-center">
                        <div>
                            <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-center "> {order.cartItems.count}</span>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 ">{product.price} EGP</td>
            </tr>} />
        })} */}

        {/* return (
        <>
            {orders && orders.length > 0 ? (
                orders.map((order, idx) => (
                    <Accordion
                        key={idx}
                        title={`Order ${idx + 1}`}
                        answer={
                            <tr
                                key={order.cartItems.id}
                                className="bg-white border-b hover:bg-gray-100 hover:scale-105 transition-all duration-500 ease-in-out shadow-md hover:shadow-lg"
                            >
                                <td className="p-4">
                                    <img
                                        src={order.cartItems.product.imageCover}
                                        className="w-16 md:w-32 max-w-full max-h-full"
                                        alt={order.cartItems.product.title}
                                    />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    {order.cartItems.product.title}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div>
                                            <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-center">
                                                {order.cartItems.count}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 ">
                                    {order.cartItems.product.price} EGP
                                </td>
                            </tr>
                        }
                    />
                ))
            ) : (
                <p>No orders found.</p> // رسالة تظهر لو مفيش طلبات
            )}
        </>
        );
 */}

{orders && orders.length > 0 ? (
                orders.map((order, idx) => (
                    <Accordion
                        key={idx}
                        title={`Order ${idx + 1} - Total: ${order.totalOrderPrice} EGP`}
                        answer={
                            <table className="min-w-full bg-white">
                                <tbody>
                                    {order.cartItems.map((product, idx) => (
                                        <tr
                                            key={product._id}
                                            className=" px-3 bg-white border-b hover:bg-gray-100 shadow-md hover:shadow-lg"
                                        >
                                            <td className="p-4">
                                                <img
                                                    src={product.product.imageCover}
                                                    className="w-16 md:w-32 max-w-full max-h-full"
                                                    alt={product.product.title}
                                                />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 ">
                                                {product.product.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 text-center">
                                                            {product.count}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 ">
                                                {product.price} EGP
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                    />
                ))
            ) : (
                <p>No orders found.</p> // رسالة تظهر لو مفيش طلبات
            )}


    </>
}
