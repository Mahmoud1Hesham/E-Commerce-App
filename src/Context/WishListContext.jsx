import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { createContext } from "react";
import toast from 'react-hot-toast';

export let WishContext = createContext();
export default function WishListContextProvider({ children }) {

    const [wish, setWish] = useState(null)

    let headers = {
        token: localStorage.getItem('token')
    }

    async function addToWishlist (productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
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

}

return <WishContext.Provider value={addToWishlist}>
    {children}
</WishContext.Provider>