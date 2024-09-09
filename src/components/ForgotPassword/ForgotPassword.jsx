import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import * as Yup from 'yup';
import { PasswordContext } from '../../Context/PasswordContext';

export default function ForgotPassword() {

    let { forgotPassword, isClicked, setIsClicked, loading , verifyResetCode } = useContext(PasswordContext);


    let validationSchema1 = Yup.object().shape({
        email: Yup.string().email('invalid email !').required('Email is required !'),
    });
    let validationSchema2 = Yup.object().shape({
        resetCode: Yup.string().matches(/^\d{6}$/, 'Please enter a valid reset code!').required('Reset code is required!')
    });



    let formik1 = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validationSchema1,
        onSubmit: forgotPassword
    });
    let formik2 = useFormik({
        initialValues: {
            resetCode: "",
        },
        validationSchema: validationSchema2,
        onSubmit: verifyResetCode
    });



    return <>


        <div className="w-full h-[80vh] flex justify-center items-center">

            {!isClicked ? <>
                <form onSubmit={formik1.handleSubmit} className="rounded-lg w-3/4 max-w-2xl p-5 flex flex-col justify-center items-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out">
                    <h1 className='text-center text-2xl mb-5'>Forgot Password</h1>
                    <div className="relative z-0 w-full mb-5 group p-4">
                        <input value={formik1.values.email} onChange={formik1.handleChange} onBlur={formik1.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                    </div>
                    {formik1.errors.email && formik1.touched.email ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik1.errors.email}
                    </div> : ''}
                    <button type="submit" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </form>
            </> : <>
                <form onSubmit={formik2.handleSubmit} className="rounded-lg w-3/4 max-w-2xl p-5 flex flex-col justify-center items-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out">
                    <h1 className='text-center text-2xl mb-5'>Reset Password</h1>
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={formik2.values.resetCode} maxLength={6} onChange={formik2.handleChange} onBlur={formik2.handleBlur} type="resetCode" name="resetCode" id="resetCode" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="resetCode" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reset code</label>
                    </div>
                    {formik2.errors.resetCode && formik2.touched.resetCode ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        {formik2.errors.resetCode}
                    </div> : ''}
                    <button type="submit" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                </form>
            </>}


        </div>


    </>
}
