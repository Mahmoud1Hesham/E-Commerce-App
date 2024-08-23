import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { createContext } from "react";
import toast from 'react-hot-toast';

export let CartContext = createContext();


export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState(null)
    const [loading , setLoading]= useState(false)
    let headers = {
        token: localStorage.getItem('token')
    }
    async function checkoutSession(shippingAddress) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers
            })
            console.log(data);
            window.location.href = data.session.url
        } catch (err) {
            console.log(err);
        }
    }
    async function addProductsToCart(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            }, {
                headers
            })
            console.log(data);
            toast.success(data.message)
        } catch (err) {
            console.log(err);
            toast.error(data.message)
        }
    }
    async function deleteProduct(productId) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                headers
            })
            console.log(data);
            setCart(data)
            toast.success('The selected product has been deleted')
        } catch (err) {
            console.log(err);
            toast.error('there is an unexpected error')
        }
    }
    async function updateProductCount(productId , count) {
        try {
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                count
            }, {
                headers
            })
            console.log(data);
            setCart(data)
        } catch (err) {
            console.log(err);
        }
    }
    async function getLoggedUserCart() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{ headers})
            console.log(data);
            setCart(data)
        } catch (err) {
            console.log("Error response:", err.response);
            
        }
    }
    useEffect(()=>{getLoggedUserCart()},[])

    return <CartContext.Provider value={{checkoutSession, addProductsToCart , getLoggedUserCart ,cart ,setCart ,updateProductCount,deleteProduct }}>
        {children}
    </CartContext.Provider>

}
