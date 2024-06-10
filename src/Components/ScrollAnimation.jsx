import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ScrollAnimation() {
    useEffect(()=> {
        AOS.init({duration : 2000})
    }, [])
    return (
        <div>ScrollAnimation</div>
    )
}

export default ScrollAnimation