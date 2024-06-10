import React, { useEffect } from 'react'
import './Programs.css'
import { useTranslation } from "react-i18next";
import img1 from'../Tools/Imgs/img1_programs .png'
import img2 from '../Tools/Imgs/img2_programs .png'
import img3 from '../Tools/Imgs/img3_programs .png'
import img4 from '../Tools/Imgs/img4_programs .png'
import img5 from '../Tools/Imgs/img5_programs .png'
import img6 from '../Tools/Imgs/img6_programs .png'
import img7 from '../Tools/Imgs/img7_programs .png'
import img8 from '../Tools/Imgs/img8_programs  .png'
import img9 from '../Tools/Imgs/img9_programs .png'
import img10 from '../Tools/Imgs/img10_programs .png'
import img11 from '../Tools/Imgs/img11_programs .png'
import img12 from '../Tools/Imgs/img12_programs .png'
import img13 from '../Tools/Imgs/img13_programs .png'
import img14 from '../Tools/Imgs/img14_programs .png'
import img15 from '../Tools/Imgs/img15_programs  .png'
import img16 from '../Tools/Imgs/img16_programs.png'
import img17 from '../Tools/Imgs/img17_programs.png'
import img18 from '../Tools/Imgs/img18_programs.png'
import img19 from '../Tools/Imgs/img19_programs.png'
import img20 from '../Tools/Imgs/img20_programs.png'
import img21 from '../Tools/Imgs/img21_programs.png'
import img22 from '../Tools/Imgs/img22_programs.png'
import img23 from '../Tools/Imgs/img23_programs.png'
import img24 from '../Tools/Imgs/img24_programs.png'
import img25 from '../Tools/Imgs/img25_programs.png'
import img26 from '../Tools/Imgs/img26_programs .png'
import img27 from '../Tools/Imgs/img27_programs .png'
import img28 from '../Tools/Imgs/img28_programs .png'
import img29 from '../Tools/Imgs/img29_programs .png'
import { Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import BtnReadMore from '../Components/BtnReadMore'
import Animation from '../Components/Animation'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Programs() {
    const [t] = useTranslation()
    useEffect(()=>{
        AOS.init({duration : 2500})
    } , [])
    return (
        //////////////////////////section1/////////////////////////////
        <Animation>
        {/* All Parent as Global Style  */}
            <div className="all-parent">

                    <div className='head_section' data-aos="zoom-in">
                            <p>{t('Activities')}</p>
                    </div>
                    <section className='sec1' data-aos="zoom-in">
                        <p className='sec1_p1'>{t('programText1')}</p>
                        <p className='sec1_p2'>{t('programText2')}</p>
                        <p className='sec1_p3 pb-3 pt-3'>{t('programText3')} </p>
                    </section>

                {/* //////////////////////////////////section2////////////////////////////////////  */}
                    <div className='head_section' data-aos="zoom-in">
                            <p>{t("Exhibitions")}</p>
                    </div>
                    <section className='sec2' data-aos="zoom-in">
                        <div className='top' data-aos="fade-left">
                            <div className='text' >
                                <p>{t("programtext1")}
                                    <BtnReadMore content={t("programtext1more")} />
                                </p>
                                
                            </div>
                            <div className='image'>
                                <Image src={img1} thumbnail/>
                            </div>
                        </div>
                        {/* ////////////////////////////////////////////////////////////////// */}
                        <div className='mid' data-aos="fade-right">
                        <div className='text'>
                            <p>{t("programtext2")}
                                        <BtnReadMore content={t("programtext2more")}/>         
                            </p>
                            
                        </div>
                            <div className='image'>
                            <Image src={img2} thumbnail/>
                            </div>
                        </div>
                        {/* ////////////////////////////////////////////////////////////////// */}
                        <div className='bottom' data-aos="fade-down">
                        <div className='text'>
                            <p>{t("programtext3")}
                                <BtnReadMore content={t("programtext3more")} /> 
                            </p>
                        </div>
                            <div className='image'>
                            <Image src={img3} thumbnail/>
                            </div>
                        </div>
                    </section>

                {/* ////////////////////////////////section3///////////////////////////////////////// */}
                <div className='head_section' data-aos="zoom-in">
                            <p>{t("HeadSection1")}</p>
                </div>
                <div className='text-before-sec' data-aos="zoom-in">
                    <p className='sec1_p1'>{t("HeadSectionP1")}</p>
                    <p className='sec1_p2'>{t("HeadSectionP2")}</p>
                </div>
                <section className='sec3' data-aos="zoom-in">
                    <div className='sec3_div' >
                        <Image src={img4} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img4")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img5} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img5")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img6}/>
                        <p data-aos="flip-left">{t("img6p1")}</p>
                        <p data-aos="flip-right">{t("img6p2")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img7} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img7")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img8} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img8")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img9} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img9")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img10} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img10")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img11} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img11")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img12} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img12")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img13} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img13")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img14} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img14")}</p>
                    </div>
                    <div className='sec3_div'>
                        <Image src={img15} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img15")}</p>
                    </div>
                    
                </section>
            {/* ///////////////////////////////////////section4//////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='head_section' data-aos="zoom-in">
                            <p>{t("HeadSection2")}</p>
                </div>
                <div className='text-before-sec' data-aos="zoom-in">
                    <p className='sec1_p1'>{t("HeadSection2P")}</p>
                </div>
                <section className='sec4' data-aos="zoom-in">
                    <div className='sec4_div'>
                            <Image src={img16} data-aos="flip-left"/>
                            <p data-aos="flip-right">{t("img16")}</p>
                    </div>
                    <div className='sec4_div'>
                            <Image src={img17} data-aos="flip-left"/>
                            <p data-aos="flip-right">{t("img17")}</p>
                    </div>
                    <div className='sec4_div'>
                        <Image src={img18} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img18")} </p>
                    </div>
                    <div className='sec4_div'>
                        <Image src={img19} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img19")}</p>
                    </div>
                </section>
            {/* ///////////////////////////////////////section5//////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='head_section' data-aos="zoom-in">
                    <p>{t("HeadSection3")}</p>
                </div>
                <div className='text-before-sec' data-aos="zoom-in">
                    <p className='sec1_p1' data-aos="flip-left">{t("HeadSection3text")}
                        <BtnReadMore content={t("HeadSection3textmore")}/>
                    </p>
                    <p className='sec1_p2' data-aos="flip-left">{t("HeadSection3P")}</p>
                </div>
                <section className='sec5' data-aos="zoom-in">
                    <div className='sec5_div1'> 
                        <Image src={img20} data-aos="flip-left"/>
                        <p id='p1' data-aos="flip-right">{t("img20p1")}</p>
                        <p data-aos="flip-right"> {t("img20p2")}</p>
                    </div>
                    <div className='sec5_div1'>
                        <Image src={img21} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img21")}</p>
                    </div>
                    <div className='sec5_div2'>
                    <Image src={img22} data-aos="flip-left"/>
                    <Image src={img23} data-aos="flip-right"/>
                    </div>
                    <div className='sec5_div3'>
                        <p data-aos="flip-left">{t("img22-23")}</p>
                    </div>
                    <div className='sec5_div2'>
                    <Image src={img24} data-aos="flip-left"/>
                    <Image src={img25} data-aos="flip-right"/>
                    </div>
                    <div className='sec5_div3' data-aos="flip-left">
                        <p >{t("img24-25")}</p>
                    </div>
                </section> 
                <div className='head_section' data-aos="zoom-in">
                    <p>{t("HeadSection4")}</p>
                </div>
                <section className='sec11'>
                    <div className='sec11_div'>
                        <Image src={img26} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img26")}</p>
                    </div>
                    <div className='sec11_div'>
                    <Image src={img27} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img27")}</p>
                    </div>
                    <div className='sec11_div'>
                    <Image src={img28} data-aos="flip-left"/>
                        <p data-aos="flip-right"> {t("img28")}</p>
                    </div>
                    <div className='sec11_div'>
                        <Image src={img29} data-aos="flip-left"/>
                        <p data-aos="flip-right">{t("img29")}</p>
                    </div>

                </section>

                <Footer/>
            </div>

        </Animation>
    )
}

export default Programs


