import React from "react";
import {Image} from "react-bootstrap"
import TeamLogo from "../Tools/Imgs/teamImg.png"
import { useTranslation } from "react-i18next";
import {motion} from 'framer-motion'

function HomeDesign() {
    const [t] = useTranslation()
    
    return(
        <>
            <section className="homeDesign " >
                <div className="homeDesign-overlay">
                    <div className="homeDesign-parent">
                        <motion.h1 
                        className="text-center p-4 title-wel"
                        initial={{y : "100%"}}
                        animate={{y : 0}}
                        exit={{y : "-100%"}}
                        transition={{duration : 1, ease : 'easeInOut' , delay : 1}}
                        >
                            {t('Welcome')}
                        </motion.h1>
                        <div className="homeDesign-header">
                            <span className="leftLine"></span>
                            <motion.h1 
                                className="text-center"
                                initial={{y : "100%"}}
                                animate={{y : 0}}
                                exit={{y : "-100%"}}
                                transition={{duration : 1, ease : 'easeInOut' , delay : 1 }}
                            >
                                {t('to')}
                                
                            </motion.h1>
                            <span className="rightLine"></span>
                        </div>
                        <motion.h1 className="text-center title-sohag"
                            initial={{y : "100%"}}
                            animate={{y : 0}}
                            exit={{y : "-100%"}}
                            transition={{duration : 1, ease : 'easeInOut' , delay : 1}}
                        >
                            {t('title')}
                        </motion.h1>
                        <motion.p className="text-center pt-2"
                            initial={{y : "100%"}}
                            animate={{y : 0}}
                            exit={{y : "-100%"}}
                            transition={{duration : 1, ease : 'easeInOut' , delay : 1}}
                        >{t('text')}</motion.p>
                        <Image src={TeamLogo} /> 
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeDesign; 
