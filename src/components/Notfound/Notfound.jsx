import React, { useEffect, useState } from 'react'
import notfound from '../../assets/error.svg'
export default function Notfound() {



    return <>
    <div className="flex justify-center items-center">
        <img src={notfound} alt="not found" />
    </div>
    </>
}
