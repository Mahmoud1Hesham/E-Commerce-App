import axios from 'axios';
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    let validationSchema = Yup.object().shape({
        email: Yup.string().email('invalid email !').required('Email is required !'),
        newPassword: Yup.string().matches(/^\w{6,9}$/, 'Password must start with a capital litter and must be a 6 to 9 litters').required('Please write a strong valid password !'),

    })

    let formik = useFormik({
        initialValues: {
            email: "",
            newPassword: ""
        },
        validationSchema,
        onSubmit: resetPassword
    })

    async function resetPassword(values) {
        try {
            console.log(values.email, '|', values.newPassword);
            setLoading(true);
            let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
                {
                    email: values.email,
                    newPassword: values.newPassword
                })
            console.log(values.email, '|', values.newPassword);

            if (data.token) {
                toast.success('Your new password has been reset sucessfully!', { icon: '🥳' })
                navigate('/signin')
            }
            setLoading(false);
        } catch (error) {
            console.log("Error Response: ", error.response);
            // تعديل عرض رسالة الخطأ
            const errorMessage = error.response?.data?.message || error.message || "An error occurred!";
            toast.error(errorMessage, { icon: '😠' });
            setLoading(false);
        }
    }

    return <>
        <div className="w-full h-[80vh] flex justify-center items-center">
            <form onSubmit={formik.handleSubmit} className="rounded-lg w-3/4 max-w-2xl p-5 flex flex-col justify-center items-center shadow-md hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out">
                <h1 className='text-center text-2xl mb-5'>Reset Password</h1>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
                {formik.errors.email && formik.touched.email ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.email}
                </div> : ''}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name="newPassword" id="newPassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">The new password</label>
                </div>
                {formik.errors.password && formik.touched.password ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.password}
                </div> : ''}
                {loading ? <button type="button" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-crosshairs fa-spin"></i></button>
                    : <button type="submit" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
                }
            </form>
        </div>
    </>
}
