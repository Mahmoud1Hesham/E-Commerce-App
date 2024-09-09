// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Slider from 'react-slick'

// export default function RelatedProducts({ catId }) {
//     let [subcat, setSubCat] = useState(null);
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     };

//     let rp = async function relatedProducts(catId) {
//         try {
//             let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}/subcategories`)
//             setSubCat(data.data)
//         } catch (error) {
//             console.log(error.response);
//         }
//     }

//     useEffect(() => { rp(catId) }, [])
//     return <>
//         <Slider {...settings}>
//             {subcat.map((cat) => <>
//                 <figure key={cat._id} className='group relative flex flex-col justify-center items-center overflow-hidden'>
//                     <img className='w-[400px] h-[400px] object-cover' src={cat.image} alt={cat.name} />
//                     <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
//                         <h2 className='text-white text-xl'>{cat.name}</h2>
//                     </figcaption>
//                 </figure>
//             </>)}
//         </Slider>
//     </>
// }




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';

// export default function RelatedProducts({ catId }) {
//     let [subcat, setSubCat] = useState(null);
//     const [products, setProducts] = useState([])
//     let [filteredProducts, setFilteredProducts] = useState([]);
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     };

//     async function getProducts(catId) {
//         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
//         setProducts(data.data)
//         console.log(data.data);
//         filterCategories(catId)
//         console.log(filteredProducts);

//     }
//     function filterCategories(catId) {
//         setFilteredProducts(products.filter((product) =>{
//             product.category._id == catId
//         }))
//     }
//     // let rp = async function relatedProducts(catId) {
//     //     try {
//     //         let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}/subcategories`)
//     //         setSubCat(data.data)
//     //         console.log(subcat);

//     //     } catch (error) {
//     //         console.log(error.response);
//     //     }
//     // }

//     useEffect(() => { getProducts(catId) }, [catId]);

//     return (
//         <>
//             <Slider {...settings}>
//                 {subcat ? (
//                     subcat.map((cat) => (
//                         <figure key={cat._id} className='group relative flex flex-col justify-center items-center overflow-hidden'>
//                             {/* <img className='w-[400px] h-[400px] object-cover' src={cat.image} alt={cat.name} /> */}
//                             <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
//                                 <h2 className='text-white text-xl'>{cat.name}</h2>
//                             </figcaption>
//                         </figure>
//                     ))
//                 ) : (
//                     <p>Loading...</p> // Handle the loading state
//                 )}
//             </Slider>
//         </>
//     );
// }


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';

// export default function RelatedProducts({ catId }) {
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     };

//     async function getProducts() {
//         try {
//             let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
//             setProducts(data.data);
//             filterCategories(catId, products); // تأكد إنك بتصفّي بعد ما تجيب البيانات
//             console.log(filteredProducts);
//             console.log(products);

//         } catch (error) {
//             console.log(error.response);
//         }
//     }

//     function filterCategories(catId, products) {
//         const filtered = products.filter((product) => product.category._id === catId);
//         setFilteredProducts(filtered);
//     }

//     useEffect(() => { 
//         getProducts();
//     }, []);

//     return (
//         <>
//             <Slider {...settings}>
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map((product) => (
//                         <figure key={product._id} className='group relative flex flex-col justify-center items-center overflow-hidden'>
//                             <img className='w-full object-cover' src={product.imageCover} alt={product.title} />
//                             <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
//                                 <h2 className='text-white text-xl'>{product.title}</h2>
//                             </figcaption>
//                         </figure>
//                     ))
//                 ) : (
//                     <p>Loading...</p>
//                 )}
//             </Slider>
//         </>
//     );
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

export default function RelatedProducts({ catId }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    async function getProducts() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
            setProducts(data.data);
            console.log(products);
            console.log(filteredProducts);
            // تحدث المنتجات هنا
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(() => {
        getProducts(); // استدعي جلب المنتجات مرة واحدة
    }, []);

    // استخدم useEffect للفلترة كل ما المنتجات أو catId تتغير
    useEffect(() => {
        if (products.length > 0) {
            const filtered = products.filter((product) => product.category._id === catId);
            console.log('Filtered products:', filtered);
            setFilteredProducts(filtered);
        }
    }, [products, catId]); // تتابع التغييرات في products و catId


    return (
        <>
        <div className="">
            <Slider {...settings}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link to={`/productdetails/${product.id}`}>
                        <figure key={product._id} className='group mt-10 relative flex flex-col justify-center items-center overflow-hidden'>
                            <img className='w-full object-cover' src={product.imageCover} alt={product.title} />
                            <figcaption className='absolute bg-[#00000076] translate-y-[400px] opacity-0 inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out'>
                                <h2 className='text-white text-xl text-center'>{product.title}</h2>
                            </figcaption>
                        </figure>
                        </Link>
                    ))
                ) : (
                    <Loader/>
                )}
            </Slider>
        
        </div>
        </>
    );
}
