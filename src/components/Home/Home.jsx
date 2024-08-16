import React, { useEffect, useState } from 'react'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import CategorySlider from '../CategorySlider/CategorySlider.jsx'

export default function Home() {



    return <>
        <div className="text-3xl">Home</div>
        <CategorySlider/>
        <RecentProducts/>
    </>
}
