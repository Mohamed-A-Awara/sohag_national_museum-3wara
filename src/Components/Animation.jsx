import React from 'react'
import {motion} from 'framer-motion'

const animations = {
    initial : {opacity : 0.5 , x: 1000},
    animate : {opacity : 1  , x : 0} ,
    exit  : {opacity :.50 , x : -1000 }

}

function Animation({children}) {
    return (
        <motion.div variants={animations} initial = "initial"
            animate = "animate" exit='exit'
            transition={{duration : 0.5, ease : 'easeInOut' , }}
        >
            {children}
        </motion.div>
    )
}

export default Animation