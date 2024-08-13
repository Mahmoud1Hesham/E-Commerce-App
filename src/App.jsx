import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Brands from './components/Brands/Brands.jsx';
import Cart from './components/Cart/Cart.jsx';
import Categories from './components/Categories/Categories.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import Register from './components/Register/Register.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Products from './components/Products/Products.jsx';

function App() {
let routers = createBrowserRouter([
  {path :'',element : <Layout/> , children : [
    {index :true , element : <Home/> },
    {path : 'brands', element : <Brands/> },
    {path : 'cart', element : <Cart/> },
    {path : 'categories', element : <Categories/> },
    {path : 'layout', element : <Layout/> },
    {path : 'notfound', element : <Notfound/> },
    {path : 'register', element : <Register/> }, 
    {path : 'signin', element : <SignIn/> }, 
    {path : 'products', element : <Products/> }, 
  ]}
]);
  return <RouterProvider router={routers}></RouterProvider>
  
}

export default App
