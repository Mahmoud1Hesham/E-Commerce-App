import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function RouteGuard({children}) {

if (localStorage.getItem('token')) {
return children
}else{
    return <Navigate to={'/signin'}/>
}

    
}
