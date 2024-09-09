// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { createContext } from "react";
// import toast from 'react-hot-toast';

// export let WishContext = createContext();
// export default function WishListContextProvider({ children }) {

//     const [wish, setWish] = useState(null)
//     const [loading , setLoading]= useState(false)

//     let headers = {
//         token: localStorage.getItem('token')
//     }

//     async function addToWishlist (productId) {
//         try {
//             let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
//                 productId
//             }, {
//                 headers
//             })
//             console.log(data);
//             toast.success(data.message)
//         } catch (err) {
//             console.log(err);
//             toast.error(data.message)
//         }
//     }

// }

// async function deleteWishedProduct(productId) {
//     try {
//         let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
//             headers
//         })
//         console.log(data);
//         setWish(data)
//         toast.success('The selected product has been deleted')
//     } catch (err) {
//         console.log(err);
//         toast.error('there is an unexpected error')
//     }
// }


// async function getLoggedUserWishList() {
//     try {
//         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{ headers})
//         console.log(data);
//         setWish(data)
//     } catch (err) {
//         console.log("Error response:", err.response);

//     }
// }
// useEffect(()=>{getLoggedUserWishList()},[])


// return (
//     <WishContext.Provider value={{ addToWishlist, deleteWishedProduct, getLoggedUserWishList, wish }}>
//         {children}
//     </WishContext.Provider>
// );




import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export let WishContext = createContext();

export default function WishListContextProvider({ children }) {
    const [wish, setWish] = useState(null);
    const [loading, setLoading] = useState(false);

    let headers = {
        token: localStorage.getItem('token')
    };

    async function addToWishlist(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId
            }, {
                headers
            });
            console.log(data);
            setWish(data)
            getLoggedUserWishList()
            toast.success(data.message);
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || 'An unexpected error occurred');
        }
    }

    async function deleteWishedProduct(productId) {
        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers
            });
            console.log(data);
            setWish(data);
            await getLoggedUserWishList()
            toast.success('The selected product has been deleted');
            setLoading(false)
        } catch (err) {
            console.log(err);
            toast.error('There is an unexpected error');
        }
    }

    async function getLoggedUserWishList() {
        try {
            if(localStorage.getItem('token')){
                let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                    headers
                });
                setWish(data);
                console.log(data);
                console.log(data.data._id);
                console.log(data.data.id);
                console.log(data.data.length);
            }

        } catch (err) {
            console.log("Error response:", err.response);
        }
    }

    useEffect(() => { getLoggedUserWishList() }, []);

    return (
        <WishContext.Provider value={{ addToWishlist, deleteWishedProduct, getLoggedUserWishList, wish ,loading }}>
            {children}
        </WishContext.Provider>
    );
}
