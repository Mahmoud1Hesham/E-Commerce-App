
import React, { useContext, useState } from 'react';
import logo from '../../assets/freshcart-logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/UserContext.jsx';
import { CartContext } from '../../Context/CartContext.jsx';
import { WishContext } from '../../Context/WishListContext.jsx';

export default function Navbar() {
    let { cart } = useContext(CartContext);
    let {wish} = useContext(WishContext);
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
            <nav className="bg-gray-200 py-3 md:pr-20  text-center fixed z-40 w-full">
                <div className="container md:!container">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex justify-between items-center md:space-x-2 px-2">
                            <img src={logo} alt="logo" />
                            <button
                                className="md:hidden "
                                onClick={toggleNavbar}
                            >
                                <i className="fa-solid fa-bars fa-xl"></i>
                            </button>
                        </div>
                        <div className={` ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                                md:max-h-none md:opacity-100 overflow-hidden transition-all duration-500 ease-in-out md:flex flex-col md:flex-row md:space-x-10 justify-between w-full`}>
                            {userData ? <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-center items-center">
                                <li><NavLink to=''>Home</NavLink></li>
                                <li><NavLink to='products'>Products</NavLink></li>
                                <li><NavLink to='categories'>Categories</NavLink></li>
                                <li><NavLink to='brands'>Brands</NavLink></li>
                            </ul> : ' '}
                            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-center ml-auto">

                                {userData ? <>
                                    <li ><NavLink to='cart'> <span className='flex justify-center items-center'><i className='fas fa-shopping-cart px-1'></i>{cart ? cart.numOfCartItems : 0}</span></NavLink></li>
                                    <li ><NavLink to='wishlist'> <span className='flex justify-center items-center '><i class="fa-solid fa-heart px-1"></i>{wish ? wish.count : 0}</span></NavLink></li>
                                    <li className='flex justify-center items-center'><NavLink to='allorders'>Orders</NavLink><i class="fa-solid fa-user ml-2"></i></li>
                                    <li onClick={signOut} className='cursor-pointer'><span>SignOut</span></li>
                                </>
                                    : <>
                                        <li><NavLink to='register'>Register</NavLink></li>
                                        <li><NavLink to='signin'>SignIn</NavLink></li>
                                    </>
                                }
                                <li className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-2 ">
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-tiktok"></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-youtube"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
