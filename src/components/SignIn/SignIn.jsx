import React, { useContext } from 'react'
import axios from 'axios';
import { useFormik } from 'formik'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../Context/UserContext.jsx';

export default function SignIn() {
    const [apiError, setApiError] = useState(null);
    const [loading, setloading] = useState(false)
    let navigate = useNavigate();
    let { setUserData } = useContext(userContext);
    async function logIn(values) {

        try {
            setloading(true)
            localStorage.removeItem('token')
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
            localStorage.setItem('token', data.token)
            console.log(data)
            setUserData(data.token);
            navigate('/');
        } catch (err) {
            setApiError(err.response.data.message)
            setloading(false)
            console.log(err.response.data.message);
        }

    }

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('invalid email !').required('Email is required !'),
        password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one digit.').required('Please write a strong valid password !'),
    })

    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema
        , onSubmit: logIn
    })

    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="rounded-lg w-3/4 max-w-2xl p-5 flex flex-col justify-center items-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out">
                    <h1 className='text-center text-2xl mb-5'>Log in</h1>
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                        <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            {formik.errors.email}
                        </div>
                    ) : apiError ? (
                        <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            {apiError}
                        </div>
                    ) : null}

                    <div className="relative z-0 w-full mb-5 group">
                        <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    {formik.errors.password && formik.touched.password ? (
                        <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            {formik.errors.password}
                        </div>
                    ) : apiError ? (
                        <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            {apiError}
                        </div>
                    ) : null}


                    {loading ? <button type="button" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-crosshairs fa-spin"></i></button>
                        : <button type="submit" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                    }
                    <div className="w-full flex justify-end">
                        <Link to='/forgotpassword' ><button className='text-sm transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white rounded-lg px-5 py-2.5'>Forgot your Password ?</button></Link>
                    </div>
                </form>
            </div>
        </>
    )
}
