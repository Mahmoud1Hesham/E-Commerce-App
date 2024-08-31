import { createContext, useEffect, useState } from "react";
import React from 'react'

export let userContext = createContext();

export default function UserContextProvider({ children }) {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        if (localStorage.getItem('token') != null) {
            setUserData(localStorage.getItem('token'));
            console.log(userData);
            
        }
    })
    return <userContext.Provider value={{ userData, setUserData }}>
        {children}
    </userContext.Provider>

}
