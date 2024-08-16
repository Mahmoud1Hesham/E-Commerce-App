// import React, { useState } from 'react';
// import logo from '../../assets/freshcart-logo.svg';
// import { Link, NavLink } from 'react-router-dom';

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <nav className="bg-gray-200 py-2 text-center">
//                 <div className="container   ">
//                     <div className="flex flex-col md:flex-row justify-between">
//                         <div className="flex justify-between items-center md:space-x-2">
//                             <img src={logo} alt="logo" />
//                             <button 
//                                 className="md:hidden" 
//                                 onClick={toggleNavbar}
//                             >
//                                 <i className="fa-solid fa-bars"></i>
//                             </button>
//                         </div>
//                         <div className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row justify-between w-full `}>
//                             <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
//                                 <li><NavLink to=''>Home</NavLink></li>
//                                 <li><NavLink to='cart'>Cart</NavLink></li>
//                                 <li><NavLink to='products'>Products</NavLink></li>
//                                 <li><NavLink to='categories'>Categories</NavLink></li>
//                                 <li><NavLink to='brands'>Brands</NavLink></li>
//                             </ul>
//                             <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center">
//                                 <li className="space-x-2">
//                                     <i className="fa-brands fa-instagram"></i>
//                                     <i className="fa-brands fa-facebook"></i>
//                                     <i className="fa-brands fa-tiktok"></i>
//                                     <i className="fa-brands fa-twitter"></i>
//                                     <i className="fa-brands fa-linkedin"></i>
//                                     <i className="fa-brands fa-youtube"></i>
//                                 </li>
//                                 <li>Register</li>
//                                 <li>SignIn</li>
//                                 <li>SignOut</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }


import React, { useContext, useState } from 'react';
import logo from '../../assets/freshcart-logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext.jsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    let { userData, setUserData } = useContext(userContext);
    let navigate = useNavigate();
    function signOut() {
        localStorage.removeItem('token');
        setUserData(null);
        navigate('/signin')
    }
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-200 py-2 px-5 text-center">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex justify-between items-center md:space-x-2 px-2">
                            <img src={logo} alt="logo" />
                            <button
                                className="md:hidden"
                                onClick={toggleNavbar}
                            >
                                <i className="fa-solid fa-bars fa-xl"></i>
                            </button>
                        </div>
                        <div className={` ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                                md:max-h-none md:opacity-100 overflow-hidden transition-all duration-500 ease-in-out md:flex flex-col md:flex-row justify-between w-full`}>
                            {userData ? <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                <li><NavLink to=''>Home</NavLink></li>
                                <li><NavLink to='cart'>Cart</NavLink></li>
                                <li><NavLink to='products'>Products</NavLink></li>
                                <li><NavLink to='categories'>Categories</NavLink></li>
                                <li><NavLink to='brands'>Brands</NavLink></li>
                            </ul> : ' '}
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center ml-auto">
                                <li className="space-x-2">
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-tiktok"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-youtube"></i>
                                </li>
                                {userData ? <li onClick={signOut} className='cursor-pointer'><span>SignOut</span></li>
                                    : <>
                                        <li><NavLink to='register'>Register</NavLink></li>
                                        <li><NavLink to='signin'>SignIn</NavLink></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
