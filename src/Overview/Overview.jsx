import React, { useEffect } from 'react'
import './Overview.css'
import Footer from '../Footer/Footer'
import img1_overview from '../Tools/Imgs/img1_overview.png'
import img2_overview from '../Tools/Imgs/img2_overview.png'
import img3_overview from '../Tools/Imgs/img3_overview .png'
import img4_overview from '../Tools/Imgs/img4_overview .png'
import img5_overview from '../Tools/Imgs/img5_overview.png'
import {  Image } from 'react-bootstrap'
import BtnReadMore from '../Components/BtnReadMore'
import { useTranslation } from 'react-i18next'
import Animation from '../Components/Animation'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Overview() {
    const {t} = useTranslation()
    useEffect(()=>{
        AOS.init({duration:2000})
    } ,[])
    return (
        <Animation>
        {/* all-parent will be in App.css as Global Style */}
        <div className="all-parent">

        {/* Start Overview Header */}
        <div className='head_section pt-3 pb-3' data-aos="zoom-in" >
                <p>{t('overviewHeader')}</p>                
        </div>
        {/* End Overview Parent */}

        {/* Start Section One */}
        <section className='section1' data-aos="flip-right">
        <div className='top'>
            <div className='text' data-aos="flip-right">
                <p>{t('overviewPageText')}
                    <BtnReadMore content={t('overviewTextMore')} />
                </p>

            </div>
            <div className='image' data-aos="flip-left">
                <Image src={img1_overview} thumbnail />
            </div>
        </div>
        <div className='bottom'>
            <div className='text'  data-aos="flip-right">
                <p>{t('overvviewText2')}
                    <BtnReadMore content= {t('overviewTextMore2')} />
                </p>
                
            </div>
            <div className='image'  data-aos="flip-left">
            <Image src={img2_overview} thumbnail/>
            </div>
        </div>
        </section>
        {/* End Section One */}

        {/* ////////////////////////////////////////////////////section2/////////////////////////////////////////////////////////////////////// */}

        <div className='head_section pt-3 pb-3' data-aos="zoom-in">
                <p>{t('Exhibitionheader')}</p>                
        </div>

        <section className='section2' data-aos="flip-right">
        <div className='top'>
            <div className='text'  data-aos="flip-right">
                <p>{t('extext1')} 
                    <BtnReadMore content={t('extextmore')} />    
                </p>
                
            </div>
            <div className='image' data-aos="flip-left">
                <Image src={img3_overview} thumbnail/>
            </div>
        </div>
        </section>
        {/* ////////////////////////////////////////////////////section3/////////////////////////////////////////////////////////////////////// */}

        <div className='head_section pt-3 pb-3' data-aos="zoom-in">
                <p>{t('MuseumDisplay')}</p>
        </div>


        <section className='section3' data-aos="flip-right">
        <div className='top'>
            <div className='text' data-aos="flip-right">
                <p>{t('MuseumDisplayText')}

                    <BtnReadMore content={t('MuseumDisplayTextmore')} />
                </p>
            </div>

            <div className='image' data-aos="flip-left">
                <Image src={img4_overview} thumbnail/>
            </div>
        </div>

        <div className='bottom'>
            <div className='text' data-aos="flip-right">
                <p>{t('MuseumDisplayText2')} 
                    <BtnReadMore content={t('MuseumDisplayTextmore2')} /> 
                </p>
            </div>
            <div className='image' data-aos="flip-left">
            <Image src={img5_overview} thumbnail/>
            </div>
        </div>
        </section>

        <Footer/> 

        </div>
        {/* ALl Parent */}
        </Animation>
    )
}

export default Overview
