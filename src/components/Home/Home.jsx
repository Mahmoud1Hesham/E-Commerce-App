import React, { useEffect, useState } from 'react'
import RecentProducts from '../RecentProducts/RecentProducts.jsx'
import CategorySlider from '../CategorySlider/CategorySlider.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'

export default function Home() {



    return <>
        <MainSlider/>
        <CategorySlider/>
        <RecentProducts/>
    </>
}
