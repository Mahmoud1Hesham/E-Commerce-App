// import React, { useEffect, useState } from 'react'
// import Navbar from '../Navbar/Navbar.jsx'
// import Footer from '../Footer/Footer.jsx'
// import { Outlet } from 'react-router-dom'

// export default function Layout() {



//     return <>
//     <Navbar/>
// <div className="container md:pt-16 md:px-14">
//     <Outlet></Outlet>
// </div>
//     <Footer/>
//     </>
// }


import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container md:pt-16 md:px-14">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
