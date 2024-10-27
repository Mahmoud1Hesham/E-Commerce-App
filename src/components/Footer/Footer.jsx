import React, { useEffect, useState } from 'react'
import amapay from '../../assets/AmazonLogo.png'
import aex from '../../assets/aex.png'
import master from '../../assets/master.png'
import pp from '../../assets/pp.png'
import app from '../../assets/app.png'
import google from '../../assets/google.png'
export default function Footer() {



    return <>
        <footer className=' px-24 md:pb-20 pb-9 md:pt-12 bg-main-light text-center'>
            <h2 className='text-3xl'>Get The FreshCart App</h2>
            <p className='text-gray-500'>We will send you a link, open it on your phone to download the app.</p>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center flex-wrap border-b-2 p-3">
                <div className='w-full md:w-[68%] lg:w-[76%] xl:w-[82%] flex items-center'>
                    <input type="text" id="first_name" class="bg-gray-50 border outline-none border-gray-300 transition-all duration-200 ease-in-out text-sm rounded-lg focus:border-green-300 focus:ring-green-300 block w-full p-2.5  " placeholder="Email" />
                </div>
                <button className='bg-main px-8 lg:px-10 py-1 rounded-md text-white w-fit '>Share App Link</button>
            </div>
            <div className="flex border-b-2 justify-between flex-col sm:justify-center xl:justify-between xl:flex-row">
                <div className="flex space-x-3 py-5  sm:justify-center">
                    <p className=''>Payment Partners</p>
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <img src={amapay} alt="brand" className='w-14 h-10' />
                        <img src={aex} alt="brand" className='w-14 h-10' />
                        <img src={master} alt="brand" className='w-14 h-10' />
                        <img src={pp} alt="brand" className='w-20 h-10' />
                    </div>
                </div>
                <div className="flex space-x-2 items-center sm:justify-center xl:justify-between">
                    <p>Get Deliveries with FreshCart </p>
                    <div className="flex flex-col md:flex-row items-center gap-1">
                <img src={app} alt="download" className='h-10' />
                <img src={google} alt="download" className='h-12' />
                    </div>
                </div>
            </div>
        </footer>
    </>
}
