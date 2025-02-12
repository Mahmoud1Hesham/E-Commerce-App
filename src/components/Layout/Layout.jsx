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
        <>
            <Navbar />
        <div className="flex container flex-col min-h-screen">
            <div className=" sm:container md:pt-16 md:px-14">
                <Outlet />
            </div>
        </div>
            <Footer />
        </>
    );
}
