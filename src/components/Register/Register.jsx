import axios from 'axios';
import { useFormik } from 'formik'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { userContext } from '../../Context/UserContext.jsx';

export default function Register() {

    const [apiError, setApiError] = useState(null);
    const [loading, setloading] = useState(false);
    let {setUserData}= useContext(userContext);
    let navigate = useNavigate();
    async function register(values) {

        try {
            setloading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
            localStorage.setItem('token', data.token);         
            setUserData(data.token);   
            console.log(data);
            navigate('/');
        } catch (err) {
            setApiError(err.response.data.message)
            setloading(false)
        }

    }

let validationSchema =  Yup.object().shape({
    name : Yup.string().min(3 , 'Sorry, but the minimum litters is 3').max(12 , 'Sorry, but the maximum litters is 10').required('name is required !'),
    email : Yup.string().email('invalid email !').required('Email is required !'),
    password : Yup.string().matches(/^[A-Z]\w{5,8}$/,'Password must start with a capital litter and must be a 6 to 11 litters').required('Please write a strong valid password !'),
    rePassword : Yup.string().oneOf([Yup.ref('password')], 'the repassword does not match the password !').required('Please rewrite the password !'),
    phone : Yup.string().matches(/^01[0125][0-9]{8}$/,'Sorry, but we need an egyption number !').required('Sorry, but phone number is required !')
})

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""
        },
        validationSchema 
        , onSubmit: register
    })


    return <>
        <div className="w-3/4 mx-auto p-6">
            <form onSubmit={formik.handleSubmit} class="rounded-lg  max-w-md mx-auto p-5 shadow-md hover:scale-110 hover:shadow-xl transition-all duration-500 ease-in-out">
                <h1 className='text-center text-2xl mb-5'>Register Now</h1>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>
                {formik.errors.name && formik.touched.name? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.name}
                </div> : ''}
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Adress</label>
                </div>
                {apiError && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {apiError}
                </div>}
                {formik.errors.email && formik.touched.email ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.email}
                </div> : ''}
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Password</label>
                </div>
                {formik.errors.password && formik.touched.password ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.password}
                </div> : ''}
                <div class="relative z-0 w-full mb-5 group">
                    <input type="password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id="repassword" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="repassword" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter repassword</label>
                </div>
                {formik.errors.rePassword && formik.touched.rePassword ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.rePassword}
                </div> : ''}
                <div class="relative z-0 w-full mb-5 group">
                    <input type="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone</label>
                </div>
                {formik.errors.phone && formik.touched.phone ? <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    {formik.errors.phone}
                </div> : ''}
{loading ? <button type="button" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><i class="fa-solid fa-crosshairs fa-spin"></i></button>
: <button type="submit" class="mt-2 text-white bg-main focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
}
            </form>
        </div>
    </>
}
