import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { createContext } from "react";
import toast from 'react-hot-toast';


export let PasswordContext = createContext();

export default function PasswordContextProvider({ children }) {
    let [isClicked, setIsClicked] = useState(false)
    let [resf, setResf] = useState(null)
    let [resc, setResc] = useState(null)
    const [loading, setLoading] = useState(false);
    async function forgotPassword(values) { 
        setLoading(true);
        setIsClicked(true);
        console.log("Request started");
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
                email: values.email
            });
            console.log("Request successful");
            setResf(data);
            console.log(data);
        } catch (error) {
            console.error("Error response:", error.response);
        }

        setLoading(false);
        console.log("Request finished");
    }



    async function verifyResetCode(values) {
        setLoading(true);
        setIsClicked(true);
        console.log("Request started");

        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {
                resetCode: values.resetCode
            });
            console.log("Request successful");
            setResc(data);
            console.log(data);

            if (data.status == 'Success') {
                window.location.href = '/resetpassword';
                console.log('reset code is valid');

            } else {
                console.log('reset code is invalid');

            }


        } catch (error) {
            console.error("Error response:", error.response);
        }

        setLoading(false);
        console.log("Request finished");
    }



    return <PasswordContext.Provider value={{ forgotPassword, isClicked, setIsClicked, loading, verifyResetCode }} >
        {children}
    </PasswordContext.Provider>
}