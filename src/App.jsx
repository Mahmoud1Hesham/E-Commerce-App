import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Brands from './components/Brands/Brands.jsx';
import Cart from './components/Cart/Cart.jsx';
import Categories from './components/Categories/Categories.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import Register from './components/Register/Register.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Products from './components/Products/Products.jsx';
import UserContextProvider from './Context/UserContext.jsx';
import RouteGuard from './components/RouteGuard/RouteGuard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import CartContextProvider from './Context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';
import CheckOut from './components/CheckOut/CheckOut.jsx';
import AllOrders from './components/AllOrders/AllOrders.jsx';
import WishListContextProvider from './Context/WishListContext.jsx';
import WishList from './components/WishList/WishList.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword/ResetPassword.jsx';
import PasswordContextProvider from './Context/PasswordContext.jsx';

function App() {
  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <RouteGuard><Home /></RouteGuard> },
        { path: 'brands', element: <RouteGuard><Brands /></RouteGuard> },
        { path: 'cart', element: <RouteGuard><Cart /></RouteGuard> },
        { path: 'checkout', element: <RouteGuard><CheckOut /></RouteGuard> },
        { path: 'allorders', element: <RouteGuard><AllOrders /></RouteGuard> },
        { path: 'categories', element: <RouteGuard><Categories /></RouteGuard> },
        { path: '*', element: <Notfound /> },
        { path: 'register', element: <Register /> },
        { path: 'signin', element: <SignIn /> },
        { path: 'products', element: <RouteGuard><Products /></RouteGuard> },
        { path: 'wishlist', element: <RouteGuard><WishList /></RouteGuard> },
        { path: 'forgotpassword', element: <ForgotPassword /> },
        { path: 'resetpassword', element: <ResetPassword /> },
        { path: 'productdetails/:id', element: <RouteGuard><ProductDetails /></RouteGuard> },
      ]
    }
  ]);

  return <PasswordContextProvider>
    <CartContextProvider>
      <WishListContextProvider>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <Toaster />
        </UserContextProvider>
      </WishListContextProvider>
    </CartContextProvider>
  </PasswordContextProvider>

}
export default App
